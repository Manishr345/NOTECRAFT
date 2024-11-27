import React from "react";
import { LinkPreview } from "../support/link-preview";

export function LinkPreviewDemo(props) {
  return (
    (<div className="flex justify-center items-center flex-col px-4 mt-20">
      <p
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-0">
        <LinkPreview url={props.url} imageSrc={props.image} className="font-bold cursor-pointer">
          {props.content}
        </LinkPreview>
      </p>
    </div>)
  );
}
