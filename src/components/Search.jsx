import { Search } from 'lucide-react';

function SearchField() {
    return (
        <div className="relative transition-all duration-200 min-w-72">
            <input
                type="text"
                placeholder="Search..."
                className="block w-full rounded-3xl border pr-8 pl-2 py-2 focus:outline-none transition-all duration-200"
            />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500" />
        </div>
    );
}

export default SearchField;
