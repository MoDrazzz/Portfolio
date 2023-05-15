import * as Contentful from "contentful";
import Wrapper from "components/Wrapper";
import Events from "components/Events";
import { Metadata } from "next";

interface Event {
  name: Contentful.EntryFields.Text;
  date: Contentful.EntryFields.Text;
  link: Contentful.EntryFields.Text;
}

interface Content {
  title: Contentful.EntryFields.Text;
  description: Contentful.EntryFields.Text;
  events: Contentful.Entry<Event>[];
}

async function getContent() {
  const client = Contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_TOKEN,
  });

  const { fields } = await client.getEntry("200m0TLDonH7nX2FPCIJuX");

  return {
    title: fields.title,
    events: fields.events,
    description: fields.description,
  };
}

export default async function Page() {
  const content: Content = await getContent();

  return (
    <Wrapper>
      <Events {...content} />
    </Wrapper>
  );
}

export const metadata: Metadata = {
  title: "Events - Grzegorz Pawlik",
  description: "Look over events I participate to!",
};
