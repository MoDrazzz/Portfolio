import * as Contentful from "contentful";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface Event {
  name: Contentful.EntryFields.Text;
  date: Contentful.EntryFields.Text;
  link: Contentful.EntryFields.Text;
}

export default function Event({ name, date, link }: Event) {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <Paragraph>{name}</Paragraph>
      </a>
      <p>{date}</p>
    </div>
  );
}
