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
  // - by default, all tags are deselected.
  // - if user selects the tag:
  //   - search for a project with corresponding tag(s)

  const initialTagsState = tags.reduce((prev, curr) => {
    return {
      ...prev,
      [curr.sys.id]: false,
    };
  }, {});

  const [tagsState, setTagsState] = useState<TagsState>(initialTagsState);

  const filteredProjects = projects.filter((project) => {
    // Set flag, default to true, because if no tag is seleceted, we want to display the project.
    let flag = true;

    // For each tag in tagsState:
    for (let tagID in tagsState) {
      // Check if tag's state is true. If it's not, skip.
      if (tagsState[tagID]) {
        // Search in project's tags for the tag.
        const tagInProject = project.fields.tags.find(
          (tag) => tag.sys.id == tagID
        );

        // If the tag doesn't exist in project tags, set the flag to false, because project does not fulfil the criteria.
        if (!tagInProject) {
          flag = false;
          break;
        }
      }
    }

    // If flag is true, keep this project. It means, that every tag that user has selected, has it's equivalent in project tags.
    if (flag) {
      return 1;
    } else {
      return 0;
    }
  });

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
      {filteredProjects.map((project, i) => (
        <Fragment key={project.sys.id}>
          <Project
            name={project.fields.name}
            tags={Array.from(project.fields.tags, (tag) => {
              return tag.fields.name;
            }).sort(sortByFirstLetter)}
            challenges={project.fields.challenges}
          />
          {i != filteredProjects.length - 1 && <Spacer />}
        </Fragment>
      ))}
    </>
  );
}
