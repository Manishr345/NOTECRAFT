import React from "react";
import { LinkPreview } from "../support/link-preview";

export function LinkPreviewDemo() {
  return (
    (<div className="flex justify-center items-center flex-col px-4 mt-20">
      <p
        className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-0">
        <LinkPreview url="http://localhost:3000/mynotes" className="font-bold">
          My Notes
        </LinkPreview>
      </p>
    </div>)
  );
}
