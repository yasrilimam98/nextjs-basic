import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <p>
        Detail Page 
        {' '}
        {id}
        {' '}
      </p>
    </div>
  );
}
