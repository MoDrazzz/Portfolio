"use client";

import * as Contentful from "contentful";
import { Fragment, useEffect, useState } from "react";
import Heading from "./Heading";
import Project from "./Project";
import Spacer from "./Spacer";
import Tag from "./Tag";

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

interface TagsState {
  [key: string]: boolean;
}

function sortByFirstLetter(a: string, b: string) {
  const nameA = a.toUpperCase();
  const nameB = b.toUpperCase();

  if (nameA > nameB) {
    return 1;
  } else {
    return -1;
  }
}

export default function Projects({ title, tags, projects }: Content) {
  // FILTERING TAGS
  // Manage the state of a tag by onClick method
  // Display tag's styles accordingly to its state
  // Based on tags states display the list:
  // - check if there is any tag with false state in the project
  //    - if yes: return null
  //    - if no: return project

  const initialTagsState = tags.reduce((prev, curr) => {
    return {
      ...prev,
      [curr.sys.id]: true,
    };
  }, {});

  const [tagsState, setTagsState] = useState<TagsState>(initialTagsState);

  return (
    <>
      <Heading>{title}</Heading>
      <div className="flex flex-wrap gap-5">
        {tags
          .sort((a, b) => sortByFirstLetter(a.fields.name, b.fields.name))
          .map((tag) => (
            <Tag
              key={tag.sys.id}
              state={tagsState[tag.sys.id]}
              onClick={() =>
                setTagsState((prev) => ({
                  ...tagsState,
                  [tag.sys.id]: !prev[tag.sys.id],
                }))
              }
            >
              {tag.fields.name}
            </Tag>
          ))}
      </div>
      {projects.map((project, i) => (
        <Fragment key={project.sys.id}>
          {project.fields.tags.find((el) => !tagsState[el.sys.id]) ? null : (
            <>
              <Project
                name={project.fields.name}
                tags={Array.from(project.fields.tags, (tag) => {
                  return tag.fields.name;
                }).sort(sortByFirstLetter)}
                challenges={project.fields.challenges}
              />
              {i != projects.length - 1 && <Spacer />}
            </>
          )}
        </Fragment>
      ))}
    </>
  );
}
