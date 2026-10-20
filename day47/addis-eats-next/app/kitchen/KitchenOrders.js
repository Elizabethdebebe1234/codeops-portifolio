
"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "addisEatsOrders";

const nextStatus = {
  New: "Preparing",
  Preparing: "Ready",
  Ready: "Completed",
};

export default function KitchenOrders() {
  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    function loadOrders() {
      try {
        const saved = JSON.parse(
          localStorage.getItem(STORAGE_KEY) || "[]"
        );

        setOrders(Array.isArray(saved) ? saved : []);
      } catch {
        setOrders([]);
      }

      setLoaded(true);
    }

    loadOrders();

    // Refresh the list when another tab changes the orders.
    window.addEventListener("storage", loadOrders);

    return () => {
      window.removeEventListener("storage", loadOrders);
    };
  }, []);

  function updateStatus(orderId) {
    const updatedOrders = orders.map((order) =>
      order.id === orderId
        ? { ...order, status: nextStatus[order.status] || order.status }
        : order
    );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedOrders)
    );

    setOrders(updatedOrders);
  }

  if (!loaded) {
    return <p>Loading kitchen orders...</p>;
  }

  const activeOrders = orders.filter(
    (order) => order.status !== "Completed"
  );

  return (
    <section className="kitchen-orders">
      <div className="orders-heading">
        <div>
          <p className="kitchen-eyebrow">LIVE ORDER WORKSPACE</p>
          <h2>Customer Orders</h2>
          <p>Prepare meals and update each order as it progresses.</p>
        </div>

        <div className="order-count">
          {activeOrders.length} active
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="no-orders">
          <span>🍽️</span>
          <h3>No orders yet</h3>
          <p>
            When a customer confirms an order at checkout
            in this browser, it will appear here.
          </p>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <article className="kitchen-order-card" key={order.id}>
              <div className="order-card-top">
                <div>
                  <p className="order-number">{order.id}</p>
                  <h3>{order.customerName}</h3>
                  <p className="order-date">
                    {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>

                <span
                  className={`order-status status-${order.status.toLowerCase()}`}
                >
                  {order.status}
                </span>
              </div>

              <div className="order-customer-details">
                <p><strong>Phone:</strong> {order.phone}</p>
                <p><strong>Delivery:</strong> {order.address}</p>
              </div>

              <div className="order-food-list">
                <h4>Food to prepare</h4>

                {order.items.map((item, index) => (
                  <div
                    className="order-food-item"
                    key={`${order.id}-${item.id}-${index}`}
                  >
                    <div className="order-food-name">
                      {item.image ? (
                        <img src={item.image} alt="" />
                      ) : (
                        <span>🍲</span>
                      )}

                      <span>
                        <strong>{item.name}</strong>
                        <small>
                          {Number(item.price).toLocaleString()} ETB each
                        </small>
                      </span>
                    </div>

                    <strong>× {item.quantity}</strong>

                    <strong>
                      {(
                        Number(item.price) * Number(item.quantity)
                      ).toLocaleString()} ETB
                    </strong>
                  </div>
                ))}
              </div>

              <div className="order-card-bottom">
                <div>
                  <span>Total</span>
                  <strong>
                    {Number(order.total).toLocaleString()} ETB
                  </strong>
                </div>

                {nextStatus[order.status] && (
                  <button
                    type="button"
                    onClick={() => updateStatus(order.id)}
                  >
                    {order.status === "New"
                      ? "Start Preparing"
                      : order.status === "Preparing"
                        ? "Mark Ready"
                        : "Complete Order"}
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      <style jsx>{`
        .kitchen-orders {
          margin-top: 36px;
        }

        .orders-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .orders-heading h2 {
          margin: 8px 0;
          font-size: 28px;
        }

        .orders-heading p:not(.kitchen-eyebrow) {
          color: #686868;
        }

        .order-count {
          padding: 10px 16px;
          background: #fff;
          border-radius: 10px;
          font-weight: 700;
        }

        .no-orders {
          padding: 42px 20px;
          background: #fff;
          border-radius: 16px;
          text-align: center;
        }

        .no-orders > span {
          font-size: 42px;
        }

        .no-orders p {
          color: #686868;
        }

        .orders-list {
          display: grid;
          gap: 20px;
        }

        .kitchen-order-card {
          padding: 24px;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 28px rgba(0, 0, 0, 0.04);
        }

        .order-card-top,
        .order-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .order-number {
          color: #7b1e1e;
          font-weight: 800;
        }

        .order-card-top h3 {
          margin: 6px 0;
        }

        .order-date {
          color: #777;
          font-size: 13px;
        }

        .order-status {
          padding: 7px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 800;
        }

        .status-new {
          background: #fff0d0;
          color: #805400;
        }

        .status-preparing {
          background: #e1efff;
          color: #1756a9;
        }

        .status-ready {
          background: #e1f7e8;
          color: #176b35;
        }

        .status-completed {
          background: #eee;
          color: #555;
        }

        .order-customer-details {
          margin: 18px 0;
          padding: 14px;
          background: #faf7f1;
          border-radius: 10px;
          overflow-wrap: anywhere;
        }

        .order-customer-details p {
          margin: 5px 0;
        }

        .order-food-list {
          margin: 20px 0;
        }

        .order-food-list h4 {
          margin-bottom: 12px;
        }

        .order-food-item,
        .order-food-name {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .order-food-item {
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #eee;
        }

        .order-food-name {
          flex: 1;
          min-width: 0;
        }

        .order-food-name img,
        .order-food-name > span:first-child {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          object-fit: cover;
          border-radius: 9px;
        }

        .order-food-name > span:first-child {
          display: grid;
          place-items: center;
          background: #f8f3e8;
        }

        .order-food-name small {
          display: block;
          margin-top: 4px;
          color: #777;
        }

        .order-card-bottom {
          padding-top: 18px;
        }

        .order-card-bottom > div {
          display: grid;
          gap: 5px;
        }

        .order-card-bottom button {
          padding: 12px 16px;
          border: none;
          border-radius: 9px;
          background: #7b1e1e;
          color: #fff;
          font-weight: 700;
          cursor: pointer;
        }

        @media (max-width: 600px) {
          .kitchen-order-card {
            padding: 16px;
          }

          .order-food-item {
            gap: 8px;
            flex-wrap: wrap;
          }

          .order-food-name {
            flex-basis: 100%;
          }
        }
      `}</style>
    </section>
  );
}
