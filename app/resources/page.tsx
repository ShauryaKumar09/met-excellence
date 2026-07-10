"use client";

import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { FaBook, FaSearch } from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/props/Header";
import JoinUsBar from "@/components/JoinUsBar";

interface ResourceItem {
  name: string;
  description: string;
  link: string;
}

interface ResourceCategory {
  category: "Math" | "Science" | "Coding" | "Chess";
  resources: ResourceItem[];
}

const resourceCategories: ResourceCategory[] = [
  {
    category: "Math",
    resources: [
      {
        name: "AoPS Math Resources",
        description: "High-quality problem solving materials for AMC, UMTYMP, and more.",
        link: "https://artofproblemsolving.com/",
      },
      {
        name: "Khan Academy – Geometry",
        description: "Interactive lessons and practice on geometry fundamentals.",
        link: "https://www.khanacademy.org/math/geometry",
      },
      {
        name: "UMTYMP Info",
        description: "University of Minnesota's official UMTYMP program page.",
        link: "https://cse.umn.edu/math/umtymp",
      },
    ],
  },
  {
    category: "Science",
    resources: [
      {
        name: "ChemCollective",
        description: "Virtual labs and problem sets to support chemistry learning.",
        link: "http://chemcollective.org/",
      },
      {
        name: "CrashCourse Biology",
        description: "Fun and fast-paced videos covering high school biology topics.",
        link: "https://www.youtube.com/user/crashcourse",
      },
      {
        name: "Physics Classroom",
        description: "Concept-based physics tutorials and interactive tools.",
        link: "https://www.physicsclassroom.com/",
      },
    ],
  },
  {
    category: "Coding",
    resources: [
      {
        name: "W3Schools Python",
        description: "Hands-on Python tutorials and reference material.",
        link: "https://www.w3schools.com/python/",
      },
      {
        name: "Replit",
        description: "Browser-based IDE to code and collaborate in Python and more.",
        link: "https://replit.com/",
      },
    ],
  },
  {
    category: "Chess",
    resources: [
      {
        name: "Lichess.org",
        description:
          "Free online chess platform with lessons, puzzles, and tournaments.",
        link: "https://lichess.org/",
      },
      {
        name: "ChessKid",
        description:
          "Safe and fun chess learning for kids — play, solve, and grow.",
        link: "https://www.chesskid.com/",
      },
    ],
  },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Math":
    case "Science":
    case "Coding":
    case "Chess":
      return <FaBook className="mr-2" />;
    default:
      return <FaBook className="mr-2" />;
  }
};

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = resourceCategories.map((category) => ({
    ...category,
    resources: category.resources.filter(
      (resource) =>
        resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <div className="bg-grey">
      <Head>
        <title>Resources | METExcellence</title>
        <meta
          name="description"
          content="Explore the wide range of educational resources provided by METExcellence."
        />
      </Head>
      <Navbar />
      <Header
        title="Resource Center"
        description="Find educational tools, programs, and materials to support your learning journey with METExcellence."
      />
      <div className="p-4 sm:p-8 max-w-6xl mx-auto mb-8">
        <div className="mb-8">
          {/* Search Bar */}
          <div className="relative mb-8">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Render Resources by Category */}
          {filteredCategories.map((category) => (
            category.resources.length > 0 && (
              <div key={category.category} className="mb-12">
                <h2 className="text-xl font-bold text-blue2 mb-4">{category.category}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource) => (
                    <Link
                      href={resource.link}
                      key={resource.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-all p-4 flex items-center duration-150">
                        {getCategoryIcon(category.category)}
                        <div>
                          <h3 className="font-bold text-blue2 text-lg">{resource.name}</h3>
                          <p className="text-blue3 text-sm">{resource.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          ))}

          {/* No Results Message */}
          {filteredCategories.every((category) => category.resources.length === 0) && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">No resources match your search criteria.</p>
              <p className="text-gray-400">Try adjusting your search term.</p>
            </div>
          )}
        </div>

        {/* Join Us Bar */}
        <JoinUsBar />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
