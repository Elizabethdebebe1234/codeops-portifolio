export function ordersToCSV(orders) {
  const columns = [
    "Order ID",
    "Customer",
    "Restaurant",
    "Delivery Address",
    "Status",
    "Total ETB",
    "Created At",
  ];

  const escapeCell = (value) => {
    let text = String(value ?? "");

    // Prevent spreadsheet formula injection in imported/exported text.
    if (/^[=+\-@\t\r]/.test(text)) text = "'" + text;

    return '"' + text.replace(/"/g, '""') + '"';
  };

  const rows = orders.map((order) => [
    order.id,
    order.customerName,
    order.restaurant,
    order.deliveryAddress,
    order.status,
    order.total,
    order.createdAt,
  ]);

  return [columns, ...rows]
    .map((row) => row.map(escapeCell).join(","))
    .join("\r\n");
}

export function downloadOrdersCSV(orders) {
  if (typeof window === "undefined") return;

  const csv = ordersToCSV(orders);
  const blob = new Blob(["\uFEFF", csv], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "addis-eats-order-history.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();

  URL.revokeObjectURL(url);
}

export function validateCSVFile(file) {
  if (!file) return "Please select a CSV file.";

  const isCSV =
    file.name.toLowerCase().endsWith(".csv") ||
    file.type === "text/csv";

  if (!isCSV) return "Please select a .csv file.";
  if (file.size > 2 * 1024 * 1024) {
    return "The CSV file must be 2 MB or smaller.";
  }

  return null;
}

export async function readCSVFile(file) {
  const error = validateCSVFile(file);
  if (error) throw new Error(error);

  const text = await file.text();

  if (text.includes("\0")) {
    throw new Error("This file does not appear to be a valid CSV.");
  }

  const lines = text.replace(/^\uFEFF/, "").split(/\r?\n/);
  return lines.filter((line) => line.trim() !== "");
}
