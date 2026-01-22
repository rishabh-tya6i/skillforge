import { useState, useMemo } from 'react';
import { Search, Filter, Cpu, Briefcase, Award, FileQuestion, Globe, DollarSign, BarChart2 } from 'lucide-react';
import CourseCard from '../components/ui/CourseCard';
import { Button } from '../components/ui/Button';
import { COURSES_DATA } from '../data/courses';

const categories = [
    { name: "Technology Courses", icon: Cpu },
    { name: "Course Internship", icon: Briefcase },
    { name: "Mock Test", icon: FileQuestion }
];

const languages = ["English", "Spanish", "German", "Italian"];
const levels = ["Beginner", "Intermediate", "Advanced"];
const pricingOptions = ["Free", "Paid", "Discount"];

const Courses = () => {
    // State for filters
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Technology Courses");
    const [selectedPricing, setSelectedPricing] = useState([]);
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    // Toggle helper
    const toggleFilter = (item, state, setState) => {
        if (state.includes(item)) {
            setState(state.filter(i => i !== item));
        } else {
            setState([...state, item]);
        }
    };

    // Derived filtered courses
    const filteredCourses = useMemo(() => {
        return COURSES_DATA.filter(course => {
            // 1. Category Filter (Single Select)
            // Note: Value Added Skills is implied if not filtering strictly? 
            // The requirements say "Show all technology courses..." in lists. 
            // Let's strictly follow the "Selected Category" logic for the main view.
            // If "Mock Test" is selected, only show mock tests (empty).
            if (selectedCategory === "Mock Test") return false;

            // For other categories, match exact category
            // OR if "Technology Courses" is selected, maybe we show everything? 
            // The prompt says "Below Technology Courses, add exactly these 9 courses...".
            // Let's stick to strict category matching.
            const matchesCategory = course.category === selectedCategory ||
                (selectedCategory === "Technology Courses" && course.category === "Technology Courses") ||
                (selectedCategory === "Course Internship" && course.category === "Course Internship") ||
                (selectedCategory === "Value Added Skills" && course.category === "Value Added Skills");

            if (!matchesCategory && selectedCategory !== "Technology Courses") return false; // Default View?

            // 2. Search
            const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());

            // 3. Pricing
            let matchesPricing = true;
            if (selectedPricing.length > 0) {
                matchesPricing = selectedPricing.some(p => {
                    if (p === "Free") return course.price === 0 || course.pricingType === "Free";
                    if (p === "Paid") return course.price > 0;
                    if (p === "Discount") return course.hasDiscount;
                    return false;
                });
            }

            // 4. Level
            let matchesLevel = true;
            if (selectedLevels.length > 0) {
                matchesLevel = selectedLevels.includes(course.level);
            }

            // 5. Language
            let matchesLanguage = true;
            if (selectedLanguages.length > 0) {
                // Case insensitive match
                matchesLanguage = selectedLanguages.some(l => l.toLowerCase() === (course.language || "english").toLowerCase());
            }

            return matchesCategory && matchesSearch && matchesPricing && matchesLevel && matchesLanguage;
        });
    }, [searchQuery, selectedCategory, selectedPricing, selectedLevels, selectedLanguages]);


    return (
        <div className="bg-[#020617] min-h-screen pt-24 pb-20">
            <div className="max-w-[1600px] mx-auto px-6">

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* LEFT SIDEBAR PANEL */}
                    <aside className="lg:w-80 flex-shrink-0 bg-[#0F172A]/50 border border-white/10 rounded-2xl p-6 h-fit sticky top-24 backdrop-blur-sm self-start">

                        {/* 1. Search Section */}
                        <div className="relative mb-8">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search courses"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-9 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-all text-sm"
                            />
                        </div>

                        {/* 2. Course Categories */}
                        <div className="mb-8">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                                <Filter className="w-4 h-4 text-primary" /> Categories
                            </h3>
                            <div className="space-y-2">
                                {/* Technology Courses - Default/Main */}
                                <button
                                    onClick={() => setSelectedCategory("Technology Courses")}
                                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${selectedCategory === "Technology Courses" ? 'bg-primary text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                                >
                                    <Cpu className="w-4 h-4" />
                                    Technology Courses
                                </button>

                                {/* Internship */}
                                <button
                                    onClick={() => setSelectedCategory("Course Internship")}
                                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${selectedCategory === "Course Internship" ? 'bg-primary text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                                >
                                    <Briefcase className="w-4 h-4" />
                                    Course Internship
                                </button>

                                {/* Value Added Skills */}
                                <button
                                    onClick={() => setSelectedCategory("Value Added Skills")}
                                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${selectedCategory === "Value Added Skills" ? 'bg-primary text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                                >
                                    <Award className="w-4 h-4" />
                                    Value Added Skills
                                </button>

                                {/* Mock Test */}
                                <button
                                    onClick={() => setSelectedCategory("Mock Test")}
                                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${selectedCategory === "Mock Test" ? 'bg-primary text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                                >
                                    <FileQuestion className="w-4 h-4" />
                                    Mock Test
                                </button>
                            </div>
                        </div>

                        {/* 3. Pricing Filter */}
                        <div className="mb-8 border-t border-white/10 pt-6">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                                <DollarSign className="w-4 h-4 text-primary" /> Pricing
                            </h3>
                            <div className="space-y-2">
                                {pricingOptions.map(option => (
                                    <label key={option} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedPricing.includes(option) ? 'bg-primary border-primary' : 'border-gray-600 bg-transparent group-hover:border-gray-400'}`}>
                                            {selectedPricing.includes(option) && <span className="text-white text-xs">✓</span>}
                                        </div>
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={selectedPricing.includes(option)}
                                            onChange={() => toggleFilter(option, selectedPricing, setSelectedPricing)}
                                        />
                                        <span className={`text-sm ${selectedPricing.includes(option) ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* 4. Level Filter */}
                        <div className="mb-8 border-t border-white/10 pt-6">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                                <BarChart2 className="w-4 h-4 text-primary" /> Level
                            </h3>
                            <div className="space-y-2">
                                {levels.map(level => (
                                    <label key={level} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedLevels.includes(level) ? 'bg-primary border-primary' : 'border-gray-600 bg-transparent group-hover:border-gray-400'}`}>
                                            {selectedLevels.includes(level) && <span className="text-white text-xs">✓</span>}
                                        </div>
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={selectedLevels.includes(level)}
                                            onChange={() => toggleFilter(level, selectedLevels, setSelectedLevels)}
                                        />
                                        <span className={`text-sm ${selectedLevels.includes(level) ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>{level}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* 5. Language Filter */}
                        <div className="mb-8 border-t border-white/10 pt-6">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                                <Globe className="w-4 h-4 text-primary" /> Language
                            </h3>
                            <div className="space-y-2">
                                {languages.map(lang => (
                                    <label key={lang} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedLanguages.includes(lang) ? 'bg-primary border-primary' : 'border-gray-600 bg-transparent group-hover:border-gray-400'}`}>
                                            {selectedLanguages.includes(lang) && <span className="text-white text-xs">✓</span>}
                                        </div>
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={selectedLanguages.includes(lang)}
                                            onChange={() => toggleFilter(lang, selectedLanguages, setSelectedLanguages)}
                                        />
                                        <span className={`text-sm ${selectedLanguages.includes(lang) ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>{lang}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                    </aside>


                    {/* RIGHT COURSE DISPLAY AREA */}
                    <main className="flex-1">

                        {/* Header Area */}
                        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2">{selectedCategory}</h1>
                                <p className="text-gray-400">
                                    {selectedCategory === "Mock Test"
                                        ? "Practice your skills with our mock tests"
                                        : `Found ${filteredCourses.length} courses`
                                    }
                                </p>
                            </div>
                        </div>

                        {/* Grid Content */}
                        {selectedCategory === "Mock Test" ? (
                            <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/5">
                                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-500">
                                    <FileQuestion className="w-10 h-10" />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-2">Mock Tests Coming Soon</h2>
                                <p className="text-gray-400 mb-6">We are currently curating high-quality mock tests for you.</p>
                                <Button
                                    variant="ghost"
                                    onClick={() => setSelectedCategory("Technology Courses")}
                                    className="border border-white/10 text-white"
                                >
                                    Browse Technology Courses
                                </Button>
                            </div>
                        ) : filteredCourses.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredCourses.map((course) => (
                                    <CourseCard key={course.id} course={course} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/5">
                                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-500">
                                    <Filter className="w-10 h-10" />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-2">No results found</h2>
                                <p className="text-gray-400 mb-6">Try adjusting your filters to find what you're looking for.</p>
                                <div className="flex gap-4 justify-center">
                                    <Button
                                        variant="ghost"
                                        onClick={() => {
                                            setSelectedPricing([]);
                                            setSelectedLevels([]);
                                            setSelectedLanguages([]);
                                            setSearchQuery("");
                                        }}
                                        className="border border-white/10 text-white"
                                    >
                                        Clear Filters
                                    </Button>
                                </div>
                            </div>
                        )}

                    </main>

                </div>
            </div>
        </div>
    );
};

export default Courses;
