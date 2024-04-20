import Search from '@/app/search';
 
export default async function Page() {
  return (
    <div className="flex justify-center w-full h-full">
      {/* Adjust the height of the containing div as needed */}
      <div className="w-1/2 mb-32 grid text-center lg:mb-0 lg:max-w-6xl lg:grid-cols-1 lg:grid-rows-6 lg:text-left">
        <div className="w-full h-20"> {/* Example: Height set to 40 pixels */}
          <Search placeholder='Enter text...'></Search>
        </div>
        <div className="h-20 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-3 text-2xl font-semibold" style={{ color: '#007FFF' }}> {/* Example: Height set to 20 pixels */}
          <p>B</p>
        </div>
        <div className="h-20 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-3 text-2xl font-semibold" style={{ color: '#007FFF' }}> {/* Example: Height set to 20 pixels */}
          <p>B</p>
        </div>
        <div className="h-20 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-3 text-2xl font-semibold" style={{ color: '#007FFF' }}> {/* Example: Height set to 20 pixels */}
          <p>B</p>
        </div>
        <div className="h-20 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-3 text-2xl font-semibold" style={{ color: '#007FFF' }}> {/* Example: Height set to 20 pixels */}
          <p>B</p>
        </div>
        <div className="h-20 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-3 text-2xl font-semibold" style={{ color: '#007FFF' }}> {/* Example: Height set to 20 pixels */}
          <p>B</p>
        </div>
      </div>
    </div>
  );
}
