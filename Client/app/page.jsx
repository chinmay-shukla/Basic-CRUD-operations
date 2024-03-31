import "./globals.css";
import Form from "../components/form"
import Table from "../components/table"

export default function Home() {
  return (
    <main >
      <h1 className='text-center font-semibold underline text-slate-600'>Crud App</h1>
      <div>
        <Form />
        <Table />
      </div>
    </main>
  );
}
