import ClientPage from "@/app/[lang]/ClientPage";
import {getDictionary} from "../../../lib/dictionary";

export default async function Home({ params: { lang } }) {
  const { page } = await getDictionary(lang)
  return (
    <ClientPage page={page}/>
    )
}
