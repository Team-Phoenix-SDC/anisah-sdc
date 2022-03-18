import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://localhost:3000/products/1/styles');
  sleep(1);
}

// only pay attention to duration and failed when k6 runs