import Heading from "./Heading";
import * as Contentful from "contentful";
import Event from "./Event";
import Paragraph from "./Paragraph";
import Subheading from "./Subheading";

interface Event {
  name: Contentful.EntryFields.Text;
  date: Contentful.EntryFields.Text;
  link: Contentful.EntryFields.Text;
}

interface Entry {
  title: Contentful.EntryFields.Text;
  description: Contentful.EntryFields.Text;
  events: Contentful.Entry<Event>[];
}

export default function Events({ title, description, events }: Entry) {
  return (
    <>
      <Heading>{title}</Heading>
      <Subheading>{description}</Subheading>
      <div className="flex flex-wrap justify-between gap-5 after:flex-[0.8]">
        {events.map((event) => (
          <Event
            key={event.sys.id}
            name={event.fields.name}
            date={event.fields.date}
            link={event.fields.link}
          />
        ))}
      </div>
    </>
  );
}
