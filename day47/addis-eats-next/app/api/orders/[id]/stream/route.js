import { getOrder, orderStatuses } from "@/lib/orders";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  const { id } = await params;
  const order = getOrder(id);

  if (!order) {
    return Response.json(
      { error: "Order not found" },
      { status: 404 }
    );
  }

  const encoder = new TextEncoder();
  let statusIndex = order.statusIndex;
  let timer;
  let closed = false;

  const stream = new ReadableStream({
    start(controller) {
      const send = (data) => {
        if (closed) return;

        try {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify(data)}\n\n`)
          );
        } catch {
          closed = true;
          clearInterval(timer);
        }
      };

      send({
        status: orderStatuses[statusIndex],
        statusIndex,
        updatedAt: new Date().toISOString(),
      });

      timer = setInterval(() => {
        if (closed) return;

        if (statusIndex < orderStatuses.length - 1) {
          statusIndex += 1;
        }

        send({
          status: orderStatuses[statusIndex],
          statusIndex,
          updatedAt: new Date().toISOString(),
        });

        if (statusIndex === orderStatuses.length - 1) {
          clearInterval(timer);
        }
      }, 8000);

      request.signal.addEventListener(
        "abort",
        () => {
          closed = true;
          clearInterval(timer);
          try {
            controller.close();
          } catch {}
        },
        { once: true }
      );
    },

    cancel() {
      closed = true;
      clearInterval(timer);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}


