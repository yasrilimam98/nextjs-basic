import Layout from "../../components/Layout";

interface UsersProps {
  dataUsers: Array<any>;
}
export default function Users(props: UsersProps) {
  const { dataUsers } = props;
  console.log(dataUsers);

  return (
    <div>
      <Layout pageTitle="User Page">
        {dataUsers.map((user) => (
          <>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </>
        ))}
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
