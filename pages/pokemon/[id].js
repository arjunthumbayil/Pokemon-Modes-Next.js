import { useRouter } from "next/router";

export default function Details() {
  const {
    query: { id },
  } = useRouter();
  return <div>hello - {id}</div>;
}
