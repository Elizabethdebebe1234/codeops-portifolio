"use client";

import "../tracking.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import MapPanel from "./MapPanel";
import { formatETB, formatAddisDateTime } from "../../../lib/format";
import {
  downloadOrdersCSV,
  readCSVFile,
} from "../../../lib/csv";

const statuses = [
  "Order received",
  "Preparing your food",
  "Ready for delivery",
  "Out for delivery",
  "Delivered",
];

export default function TrackingClient({ initialOrder }) {
  const [order, setOrder] = useState(initialOrder);
  const [connection, setConnection] = useState("Connecting");
  const [csvMessage, setCsvMessage] = useState("");
  const [csvRows, setCsvRows] = useState([]);

  useEffect(() => {
    const source = new EventSource(
      `/api/orders/${encodeURIComponent(initialOrder.id)}/stream`
    );

    source.onopen = () => setConnection("Connected");

    source.onmessage = (event) => {
      try {
        const update = JSON.parse(event.data);

        setOrder((current) => ({
          ...current,
          status: update.status,
          statusIndex: update.statusIndex,
          updatedAt: update.updatedAt,
        }));
      } catch {
        setConnection("Received invalid update");
      }
    };

    source.onerror = () => {
      setConnection("Reconnecting...");
    };

    return () => source.close();
  }, [initialOrder.id]);

  async function handleCSVImport(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const rows = await readCSVFile(file);
      setCsvRows(rows);
      setCsvMessage(`Read ${rows.length} CSV rows successfully.`);
    } catch (error) {
      setCsvRows([]);
      setCsvMessage(error.message || "Could not read this CSV file.");
    }

    event.target.value = "";
  }

  const exportOrder = {
    ...order,
    status: order.status,
    total: order.total,
  };

  return (
    <main className="tracking-page">
      <div className="tracking-container">
        <Link href="/" className="tracking-back">
          ← Back to Addis Eats
        </Link>

        <header className="tracking-header">
          <p className="tracking-eyebrow">ADDIS EATS DELIVERY</p>
          <h1>Track your order</h1>
          <p>
            Order <strong>{order.id}</strong> · {order.restaurant}
          </p>
          <p className="tracking-demo-notice">
            Demo experience. Courier positions and status updates are simulated.
          </p>
        </header>

        <section className="tracking-card">
          <p className="tracking-muted">CURRENT ORDER STATUS</p>
          <h2>{order.status}</h2>
          <p>
            Connection: <strong>{connection}</strong>
          </p>
          <p>
            Last update:{" "}
            {formatAddisDateTime(order.updatedAt || order.createdAt)}
          </p>

          <ol className="tracking-status-list">
            {statuses.map((status, index) => {
              const currentIndex = statuses.indexOf(order.status);

              return (
                <li
                  key={status}
                  className={
                    index <= currentIndex
                      ? "tracking-status-done"
                      : "tracking-status-pending"
                  }
                >
                  <span>{index <= currentIndex ? "✓" : index + 1}</span>
                  {status}
                </li>
              );
            })}
          </ol>
        </section>

        <section className="tracking-card">
          <h2>Delivery details</h2>
          <p>
            <strong>Customer:</strong> {order.customerName}
          </p>
          <p>
            <strong>Delivery address:</strong> {order.deliveryAddress}
          </p>
          <p>
            <strong>Courier:</strong> {order.courier.name}
          </p>
          <p>
            <strong>Order placed:</strong>{" "}
            {formatAddisDateTime(order.createdAt)}
          </p>
        </section>

        <section className="tracking-card">
          <h2>Your food</h2>
          {order.items.map((item) => (
            <div className="tracking-item" key={item.name}>
              <span>
                {item.name} × {item.quantity}
              </span>
              <strong>
                {formatETB(item.price * item.quantity)}
              </strong>
            </div>
          ))}
          <div className="tracking-total">
            <span>Total</span>
            <strong>{formatETB(order.total)}</strong>
          </div>
        </section>

        <section className="tracking-card">
          <MapPanel
            courier={order.courier}
            destination={order.destination}
          />
        </section>

        <section className="tracking-card">
          <h2>Order history files</h2>
          <p>
            Download a CSV file containing this demo order, or select a CSV
            file to inspect its rows.
          </p>

          <button
            className="tracking-button"
            onClick={() => downloadOrdersCSV([exportOrder])}
          >
            Download order history (CSV)
          </button>

          <div className="tracking-import">
            <label htmlFor="tracking-csv">
              Import a CSV file (maximum 2 MB)
            </label>
            <input
              id="tracking-csv"
              type="file"
              accept=".csv,text/csv"
              onChange={handleCSVImport}
            />
          </div>

          {csvMessage && (
            <p role="status" className="tracking-csv-message">
              {csvMessage}
            </p>
          )}

          {csvRows.length > 0 && (
            <div className="tracking-csv-preview">
              <h3>CSV preview (up to 5 rows)</h3>
              <pre>{csvRows.slice(0, 5).join("\n")}</pre>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
