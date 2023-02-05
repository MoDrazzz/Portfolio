import ProjectName from "./ProjectName";
import ProjectTags from "./ProjectTags";
import * as Contentful from "contentful";

interface Props {
  name: Contentful.EntryFields.Text;
  tags: Contentful.EntryFields.Text[];
  challenges: Contentful.EntryFields.Text[];
  link: Contentful.EntryFields.Text;
}

export default function Project({ name, tags, challenges, link }: Props) {
  return (
    <div className="grid gap-2">
      <div className="md:min-w-[180px] lg:min-w-[200px] 2xl:min-w-[240px]">
        <ProjectName link={link}>{name}</ProjectName>
        <ProjectTags>{tags.join(", ")}</ProjectTags>
      </div>
      <ul className="flex list-outside list-disc flex-col gap-1 px-5 text-sm">
        {challenges.map((challenge, i) => (
          <li key={i}>{challenge}</li>
        ))}
      </ul>
    </div>
  );
}
