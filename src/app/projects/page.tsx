import * as Contentful from "contentful";
import Wrapper from "components/Wrapper";
import Tag from "components/Tag";
import Project from "components/Project";
import Projects from "components/Projects";
import { Metadata } from "next";

interface Tag {
  name: Contentful.EntryFields.Text;
}

interface Project {
  name: Contentful.EntryFields.Text;
  challenges: Contentful.EntryFields.Text[];
  tags: Contentful.Entry<Tag>[];
  link: Contentful.EntryFields.Text;
}

interface Content {
  title: Contentful.EntryFields.Text;
  projects: Contentful.Entry<Project>[];
  tags: Contentful.Entry<Tag>[];
}

async function getContent() {
  const client = Contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_TOKEN,
  });

  const { fields } = await client.getEntry("1C4XJ83o8F1o8rT0qAi5y9", {
    include: 2,
  });

  const { items: tags } = await client.getEntries<Tag>({
    content_type: "tag",
  });

  return {
    title: fields.title,
    projects: fields.projects,
    tags,
  };
}

export default async function Page() {
  const content: Content = await getContent();

  return (
    <Wrapper>
      <Projects {...content} />
    </Wrapper>
  );
}

export const metadata: Metadata = {
  title: "Projects - Grzegorz Pawlik",
  description: "Check out my projects!",
};
