import * as Contentful from "contentful";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Wrapper from "components/Wrapper";

interface Content {
  title: Contentful.EntryFields.Text;
  description: Contentful.EntryFields.Text;
}

async function getContent() {
  const client = Contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_TOKEN,
  });

  const { fields } = await client.getEntry<Content>("OqYxf1dgz4uLLGRVrrvpI");

  return {
    title: fields.title,
    description: fields.description,
  };
}

export default async function Page() {
  const { title, description }: Content = await getContent();

  return (
    <Wrapper>
      <Heading>{title}</Heading>
      <a
        href="./Grzegorz Pawlik.pdf"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer underline"
      >
        <Paragraph>Download CV</Paragraph>
      </a>
      <Paragraph>{description}</Paragraph>
    </Wrapper>
  );
}
