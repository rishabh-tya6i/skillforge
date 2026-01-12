
import { useState } from 'react';
import { Search, Filter, Code, Database, Cpu, PenTool, Layout } from 'lucide-react';
import CourseCard from '../components/ui/CourseCard';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

import { useCourses } from '../context/CourseContext';

const categories = [
    { name: "All", icon: Filter },
    { name: "Full Stack", icon: Layout },
    { name: "Frontend", icon: Code },
    { name: "Backend", icon: Database },
    { name: "Data Science", icon: Database },
    { name: "AI/ML", icon: Cpu },
    { name: "Design", icon: PenTool }
];

const Courses = () => {
    const { courses } = useCourses();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCourses = courses.filter(course => {
        const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-background min-h-screen pb-20 pt-24">
            {/* Header */}
            <div className="bg-[#0F172A] border-b border-white/5 py-12 px-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <span className="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">SkillForge Academy</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Explore Our <span className="text-glow text-primary-light">Catalog</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
                        Discover courses designed by industry experts. Filter by category or search to find your perfect match.
                    </p>

                    {/* Search Bar - Big Center */}
                    <div className="max-w-xl mx-auto relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search for Python, React, Data Science..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-16 pr-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:shadow-neon transition-all text-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12">
                {/* Filters */}
                <div className="flex overflow-x-auto pb-4 gap-4 w-full mb-12 no-scrollbar justify-start md:justify-center">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <button
                                key={cat.name}
                                onClick={() => setSelectedCategory(cat.name)}
                                className={`
                                flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all border
                                ${selectedCategory === cat.name
                                        ? 'bg-primary text-white border-primary shadow-neon'
                                        : 'bg-white/5 text-gray-400 border-white/10 hover:border-primary/50 hover:text-white'}
                            `}
                            >
                                <Icon className="w-4 h-4" />
                                {cat.name}
                            </button>
                        )
                    })}
                </div>

                {/* Course Grid */}
                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course) => (
                            <CourseCard key={course._id || course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/5">
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-500">
                            <Filter className="w-10 h-10" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">No courses found</h2>
                        <p className="text-gray-400 mb-6">Try adjusting your search or filters.</p>
                        <Button
                            variant="ghost"
                            onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                            className="border border-white/10 text-white"
                        >
                            Clear Filters
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Courses;
