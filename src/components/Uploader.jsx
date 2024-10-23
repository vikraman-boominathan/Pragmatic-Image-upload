import GridView from "../components/GridView";
import { useCallback, useEffect, useRef, useState } from "react";

import { dropTargetForExternal } from "@atlaskit/pragmatic-drag-and-drop/external/adapter";
import { containsFiles } from "@atlaskit/pragmatic-drag-and-drop/external/file";
import { monitorForExternal } from "@atlaskit/pragmatic-drag-and-drop/external/adapter";
import { getFiles } from "@atlaskit/pragmatic-drag-and-drop/external/file";

export default function Uploder() {
  const [hover, setHover] = useState(false);
  const ref = useRef(null);
  const inputRef = useRef(null);
  const [uploads, setUploads] = useState([]);

  const handleClick = useCallback(() => {
    inputRef.current.click();
  }, []);

  const addUpload = useCallback((file) => {
    if (!file || !file.type.startsWith("image/")) return;

    const upload = {
      type: "image",
      dataUrl: URL.createObjectURL(file),
      name: file.name,
      size: file.size,
    };
    setUploads((pre) => [...pre, upload]);
  });

  const pickFile = useCallback(
    (e) => {
      const clickFile = Array.from(e.currentTarget.files);
      clickFile.forEach(addUpload);
    },
    [addUpload]
  );

  useEffect(() => {
    const file = ref.current;

    const fileDrop = dropTargetForExternal({
      element: file,
      canDrop: containsFiles,
      onDragEnter: () => {
        setHover(true);
      },
      onDrop: async ({ source }) => {
        const fl = getFiles({ source });
        fl.forEach(addUpload);
      },
    });

    const monitor = monitorForExternal(
      {
        canMonitor: containsFiles,
        onDrop({ source }) {
          const fl = getFiles({ source });
        },
      },
      [addUpload]
    );

    return () => {
      fileDrop();
      monitor();
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center gap-6">
        <div
          ref={ref}
          className={`flex flex-col items-center justify-center w-1/2 h-48 mt-4 p-10 bg-gray-100 rounded-xl border-2 border-dashed transition-all ${
            hover ? "bg-blue-100 border-blue-500" : "bg-gray-100"
          }`}
        >
          <strong className="flex items-center gap-2 text-gray-500">
            Drop some images here!
          </strong>
          <button
            onClick={handleClick}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Select images
          </button>

          <input
            className="hidden"
            id="file-input"
            type="file"
            accept="image/"
            ref={inputRef}
            onChange={pickFile}
            multiple
          />
        </div>
        <GridView images={uploads} />
      </div>
    </div>
  );
}
