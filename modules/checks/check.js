import { check } from "k6";
import http from "k6/http";

export default function () {
  const res = http.get("https://quickpizza.grafana.com");
  check(res, {
    "is status 200": (r) => r.status === 200,
    "verify homepage text": (r) => r.body.includes("QuickPizza"),
    "body size is 2753 bytes": (r) => r.body.length == 2753,
  });
}
