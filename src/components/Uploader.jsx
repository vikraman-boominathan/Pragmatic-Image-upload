import GridView from "../components/GridView";

export default function Uploder() {
  return (
    <div>
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center justify-center p-10 w-1/2 h-96 mt-10 bg-gray-100 rounded-xl border-2 border-dashed  ">
          <strong className="flex items-center gap-2 text-gray-500">
            Drop some images here!
          </strong>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Select images
          </button>

          <input className="hidden" id="file-input" type="file" />
        </div>
        <GridView />
      </div>
    </div>
  );
}
