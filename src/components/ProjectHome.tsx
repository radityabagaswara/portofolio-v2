"use client";
import { ProjectHomeI } from "@/type/ProjectHome";
import axios from "axios";

import React, { useEffect, useState } from "react";
import Chip from "./Chip";
import Link from "next/link";

export const ProjectHome = () => {
  const [project, setProject] = useState<ProjectHomeI[] | null>(null);

  useEffect(() => {
    axios.get("/works/work.json").then((res) => {
      setProject(res.data);
    });
  }, []);

  //TODO: change to skeleton
  if (!project) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-10  ">
      {project.map((proj, index) => (
        <div key={index} className="w-full group cursor-pointer">
          <Link href={`/${proj.slug}`}>
            <div className="w-full aspect-video">
              <img
                src={proj.image}
                alt="project-image"
                className="object-cover w-full h-full rounded-xl bg-black group-hover:opacity-90 transition-all"
              />
            </div>
            <div className="w-full mt-2">
              <h3 className="font-semibold text-center text-lg">
                {proj.title}
              </h3>
              <p className="text-sm text-foreground-dimmed text-center">
                {proj.shortDescription}
              </p>
              <div className="flex flex-row gap-3 justify-center flex-wrap mt-2">
                {proj.stacks.map((tag, index) => (
                  <Chip key={index} text={tag} />
                ))}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
