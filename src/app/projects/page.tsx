import * as Contentful from "contentful";
import Heading from "components/Heading";
import Wrapper from "components/Wrapper";
import Tag from "components/Tag";
import Project from "components/Project";
import Spacer from "components/Spacer";
import { Fragment } from "react";

interface Tag {
  name: Contentful.EntryFields.Text;
}

interface Project {
  name: Contentful.EntryFields.Text;
  challenges: Contentful.EntryFields.Text[];
  tags: Contentful.Entry<Tag>[];
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
    fields,
  };
}

export default async function Page() {
  const { title, projects, tags }: Content = await getContent();

  return (
    <Wrapper>
      <Heading>{title}</Heading>
      <div className="flex flex-wrap gap-5">
        {tags.map((tag) => (
          <Tag key={tag.sys.id}>{tag.fields.name}</Tag>
        ))}
      </div>
      {projects.map((project, i) => (
        <Fragment key={project.sys.id}>
          <Project
            name={project.fields.name}
            tags={Array.from(project.fields.tags, (tag) => {
              return tag.fields.name;
            })}
            challenges={project.fields.challenges}
          />
          {i != projects.length - 1 && <Spacer />}
        </Fragment>
      ))}
    </Wrapper>
  );
}
