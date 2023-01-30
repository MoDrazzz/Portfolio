import * as Contentful from "contentful";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface Event {
  name: Contentful.EntryFields.Text;
  date: Contentful.EntryFields.Text;
}

export default function Event({ name, date }: Event) {
  return (
    <div>
      <Paragraph>{name}</Paragraph>
      <p>{date}</p>
    </div>
  );
}
