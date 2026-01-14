import AccordionItem from "./AccordionItem";
import data from "./data";

export default function Accordion() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 h-screen flex flex-col items-center overflow-auto mb-10">
      <h1 className="text-3xl font-bold mb-6">Accordion Component</h1>
      <p className="text-lg text-gray-600">
        This is a placeholder for the Accordion component.
      </p>
      <div className="flex flex-col w-full p-5 m-2 border border-violet-950 rounded-lg">
        <h1>FAQ's</h1>
        <div>
          {data.faqs.map((item, index) => (
            <AccordionItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
