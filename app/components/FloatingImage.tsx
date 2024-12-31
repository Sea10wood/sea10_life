"use client";

import { useState } from "react";
import styles from "@/app/styles/FloatingImage.module.css";
import Image from "next/image";
import zIndex from "../styles/zIndex";
import { sendToDiscord } from "../hooks/sendToDiscord";

export default function FloatingImage() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [initialMessage, setInitialMessage] = useState(true);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim()) {
      await sendToDiscord(`名前: ${name}`);
      alert("送信しました！");
      setShowForm(false);
      setName("");
    } else {
      alert("名前を入力してください！");
    }
  };

  return (
    <div
      className="absolute bottom-4 w-full flex flex-col items-center"
      style={{ zIndex: zIndex.floatingImage }}
    >
      <div className={`relative ${styles.float}`}>
        <Image
          src="/sea10.webp"
          alt="Sea10"
          width={500}
          height={500}
          className="w-[300px] sm:w-[400px] md:w-[500px] drop-shadow-lg"
          priority
          onClick={() => setShowForm(!showForm)}
        />
        {initialMessage && (
          <div
            className={`absolute top-[-36px] left-[22%] transform -translate-x-1/2 ${styles.floatBubble}`}
          >
            <div className="bg-white text-black px-6 py-3 rounded-lg shadow-lg text-nowrap">
              <p className="text-lg font-medium">こんにちは！Sea10です！</p>
              <button
                onClick={() => {
                  setShowForm(true);
                  setInitialMessage(false);
                }}
                className="mt-4 px-8 py-2 bg-sky-800 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors text-nowrap"
                aria-label="Sea10と話してみる"
              >
                Sea10と話してみる
              </button>
            </div>
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-white"></div>
          </div>
        )}
        {showForm && (
          <div
            className={`absolute top-[-64px] left-[18%]  transform -translate-x-1/2 ${styles.floatBubble}`}
          >
            <div className="bg-white text-black px-6 py-4 rounded-lg shadow-lg ">
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                <label htmlFor="name" className="text-sm font-medium">
                  あなたの名前を教えてほしいな
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="例: Sea10"
                  aria-label="名前を入力してください"
                />
                <button
                  type="submit"
                  className="px-5 py-2 bg-sky-800 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-sky-700 transition-colors"
                >
                  送信
                </button>
              </form>
            </div>
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-white"></div>
          </div>
        )}
      </div>
    </div>
  );
}
