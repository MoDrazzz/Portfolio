import * as Contentful from "contentful";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Wrapper from "components/Wrapper";
import { Metadata } from "next";

interface Content {
  title: Contentful.EntryFields.Text;
  description: Contentful.EntryFields.Text;
}

interface CV {
  cvFile: {
    fields: {
      title: Contentful.EntryFields.Text;
      description: Contentful.EntryFields.Text;
      file: Contentful.AssetFile;
    };
  };
}

const client = Contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_TOKEN,
});

async function getContent() {
  const { fields } = await client.getEntry<Content>("OqYxf1dgz4uLLGRVrrvpI");

  return {
    title: fields.title,
    description: fields.description,
  };
}

async function getCV() {
  const { fields } = await client.getEntry<CV>("7l7N2zNAaCbwY5wHdOTlWQ");

  return fields;
}

export default async function Page() {
  const { title, description }: Content = await getContent();
  const fields = await getCV();

  return (
    <Wrapper>
      <Heading>{title}</Heading>
      <a
        href={fields.cvFile.fields.file.url}
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

export const metadata: Metadata = {
  title: "Grzegorz Pawlik - Front-End Developer",
  description:
    "My name is Grzegorz Pawlik. I am a 17-year-old front-end developer based in Bielsko-Biała, Poland. Meet me closer!",
};
