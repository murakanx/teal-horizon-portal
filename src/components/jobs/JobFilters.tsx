
import { Search, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export interface FilterState {
  keyword: string;
  location: string;
  categories: string[];
  jobTypes: string[];
  experienceLevels: string[];
  datePosted: string;
  salaryRange: [number, number];
  tags: string[];
}

interface JobFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onApply: () => void;
  onClear: () => void;
}

export const JobFilters = ({
  filters,
  onChange,
  onApply,
  onClear,
}: JobFiltersProps) => {
  const categories = [
    { id: "commerce", label: "Commerce", count: 10 },
    { id: "hotels-tourism", label: "Hotels & Tourism", count: 10 },
    { id: "education", label: "Education", count: 10 },
    { id: "financial-services", label: "Financial Services", count: 10 },
    { id: "telecommunications", label: "Telecommunications", count: 10 },
  ];

  const jobTypes = [
    { id: "full-time", label: "Full Time", count: 10 },
    { id: "part-time", label: "Part Time", count: 10 },
    { id: "freelance", label: "Freelance", count: 10 },
    { id: "seasonal", label: "Seasonal", count: 10 },
    { id: "fixed-price", label: "Fixed-Price", count: 10 },
  ];

  const experienceLevels = [
    { id: "no-experience", label: "No experience", count: 10 },
    { id: "fresher", label: "Fresher", count: 10 },
    { id: "intermediate", label: "Intermediate", count: 10 },
    { id: "expert", label: "Expert", count: 10 },
  ];

  const datePostedOptions = [
    { id: "all", label: "All" },
    { id: "last-hour", label: "Last Hour" },
    { id: "last-24-hours", label: "Last 24 Hours" },
    { id: "last-7-days", label: "Last 7 Days" },
    { id: "last-30-days", label: "Last 30 Days" },
  ];

  const tags = ["engineering", "design", "UNIX", "marketing", "management", "UX", "construction"];

  const handleCheckboxChange = (
    category: string,
    value: string,
    isChecked: boolean
  ) => {
    const newValues = isChecked
      ? [...filters[category as keyof FilterState] as string[], value]
      : (filters[category as keyof FilterState] as string[]).filter(
          (item) => item !== value
        );

    onChange({
      ...filters,
      [category]: newValues,
    });
  };

  const handleRadioChange = (category: string, value: string) => {
    onChange({
      ...filters,
      [category]: value,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({
      ...filters,
      [name]: value,
    });
  };

  const handleSliderChange = (values: number[]) => {
    onChange({
      ...filters,
      salaryRange: [values[0], values[1]] as [number, number],
    });
  };

  const handleTagClick = (tag: string) => {
    const newTags = filters.tags.includes(tag)
      ? filters.tags.filter((t) => t !== tag)
      : [...filters.tags, tag];

    onChange({
      ...filters,
      tags: newTags,
    });
  };

  return (
    <div className="bg-job-background rounded-lg p-4">
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Search by Job Title</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            name="keyword"
            placeholder="Job title or company"
            className="search-input"
            value={filters.keyword}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Location</h3>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            name="location"
            placeholder="Choose city"
            className="search-input"
            value={filters.location}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center">
              <input
                type="checkbox"
                className="filter-checkbox"
                checked={filters.categories.includes(category.id)}
                onChange={(e) =>
                  handleCheckboxChange("categories", category.id, e.target.checked)
                }
              />
              <span className="filter-label">
                {category.label} <span className="text-gray-400">({category.count})</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Job Type</h3>
        <div className="space-y-2">
          {jobTypes.map((type) => (
            <label key={type.id} className="flex items-center">
              <input
                type="checkbox"
                className="filter-checkbox"
                checked={filters.jobTypes.includes(type.id)}
                onChange={(e) =>
                  handleCheckboxChange("jobTypes", type.id, e.target.checked)
                }
              />
              <span className="filter-label">
                {type.label} <span className="text-gray-400">({type.count})</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Experience Level</h3>
        <div className="space-y-2">
          {experienceLevels.map((level) => (
            <label key={level.id} className="flex items-center">
              <input
                type="checkbox"
                className="filter-checkbox"
                checked={filters.experienceLevels.includes(level.id)}
                onChange={(e) =>
                  handleCheckboxChange("experienceLevels", level.id, e.target.checked)
                }
              />
              <span className="filter-label">
                {level.label} <span className="text-gray-400">({level.count})</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Date Posted</h3>
        <div className="space-y-2">
          {datePostedOptions.map((option) => (
            <label key={option.id} className="flex items-center">
              <input
                type="radio"
                name="datePosted"
                className="filter-checkbox"
                checked={filters.datePosted === option.id}
                onChange={() => handleRadioChange("datePosted", option.id)}
              />
              <span className="filter-label">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Salary</h3>
        <div className="px-2">
          <Slider
            defaultValue={[filters.salaryRange[0], filters.salaryRange[1]]}
            max={100000}
            step={1000}
            onValueChange={handleSliderChange}
            className="my-6"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <div>Salary: ${filters.salaryRange[0]}</div>
            <div>${filters.salaryRange[1]}</div>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="mt-3 w-full"
          onClick={onApply}
        >
          Apply
        </Button>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                filters.tags.includes(tag)
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-200 p-4 rounded-lg mt-8 text-center">
        <div className="text-lg font-medium mb-2">WE ARE HIRING</div>
        <div className="text-sm mb-4">Apply Today!</div>
        <div className="h-32 bg-gray-300 rounded-lg mb-4"></div>
      </div>
    </div>
  );
};
