"use client";
import Chip from "@/components/Chip";
import ProjectImageModal from "@/components/ImageZoomModal";
import { Work } from "@/type/Work";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function WorkPage({ params }: Props) {
  const { slug } = React.use(params);
  const [data, setData] = useState<Work | null>(null);
  const [modal, setModal] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (slug) {
      axios
        .get("/works/" + slug + ".json")
        .then((res) => {
          setData(res.data);
        })
        .catch(() => {
          router.push("/");
        });
    }
  }, [slug]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="max-w-2xl mx-auto px-4">
        <h1>{data.title}</h1>
        <h3 className="text-sm">{data.type}</h3>
        <img src={data.thumbnail} className="w-full mt-3 rounded-xl" />
        <div className=" flex flex-col my-5 gap-3">
          <div className="flex items-center flex-row gap-3">
            <div className="w-max">
              <Chip text="Stacks" />
            </div>
            <p>
              {data.stacks.map((stack, index) => {
                return `${stack}${index < data.stacks.length - 1 ? ", " : ""}`;
              })}
            </p>
          </div>
          {data.github && data.github.length > 0 && (
            <div className="flex items-center flex-row gap-3">
              <div className="w-max">
                <Chip text="Github" />
              </div>
              <p>
                <a
                  href={data.github}
                  target="_blank"
                  className="after:content-['_↗'] text-blue-300"
                >
                  {data.github}
                </a>
              </p>
            </div>
          )}
          {data.website && data.website.length > 0 && (
            <div className="flex items-center flex-row gap-3">
              <div className="w-max">
                <Chip text="Website" />
              </div>
              <p>
                <a
                  href={data.website}
                  target="_blank"
                  className="after:content-['_↗'] text-blue-300"
                >
                  {data.website}
                </a>
              </p>
            </div>
          )}
        </div>
        <article className="prose prose-invert max-w-none">
          <p className=" text-justify mt-3 w-full">{data.description}</p>
        </article>

        <div className="grid md:grid-cols-2 gap-5 mt-5">
          {data.images.map((image, index) => {
            return (
              <img
                onClick={() => {
                  setModal(image);
                }}
                key={index}
                src={image}
                className="bg-black hover:opacity-90 active:opacity-75 transition-all cursor-pointer w-full h-48 aspect-video object-cover rounded-lg"
              />
            );
          })}
        </div>
      </div>
      {modal ? (
        <ProjectImageModal
          close={() => {
            setModal(null);
          }}
          image={modal}
        />
      ) : null}
    </>
  );
}
