import Wrapper from "components/Wrapper";
import Contact from "components/Contact";
import * as Contentful from "contentful";

interface Social {
  name: Contentful.EntryFields.Text;
  value: Contentful.EntryFields.Text;
}

interface Content {
  title: Contentful.EntryFields.Text;
  description: Contentful.EntryFields.Text;
  socials: Contentful.Entry<Social>[];
}

async function getContent() {
  const client = Contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_TOKEN,
  });

  const { fields } = await client.getEntry("1dwpQ6UyEaWsyMThFc25Yx");

  return {
    title: fields.title,
    description: fields.description,
    socials: fields.socials,
  };
}

export default async function Page() {
  const content: Content = await getContent();

  return (
    <>
      <Contact {...content} />
    </>
  );
}
