// page.tsx
"use client";

import * as z from "zod";
import axios from "axios";
import { Heading } from "@/components/heading";
import { DatabaseIcon, FileBadgeIcon, FileLineChartIcon, MessageCircle, PlaneIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./constants";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import ReactMarkdown from "react-markdown";
import { toast } from "react-hot-toast";
import Papa from 'papaparse'; // For parsing CSV
import { FileInput } from '@/components/ui/file-input'; // Custom FileInput component
import { DataFrame } from 'dataframe-js'; // For displaying CSV data as a data frame


// ... (import statements)

const PolicyPage = () => {
  return (
    <div>
      <Heading
        title="Document Verification"
        description="Upload your ID proof and Bank documents to complete verification"
        icon={FileBadgeIcon}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
      <div className="px-4 lg:px-8">
        {/* Frame for embedding an iframe */}
        <div style={{ height: "80vh" }}>
          {/* Embed your iframe here */}
          <iframe
             src="https://document-ver.streamlit.app?embed=true"// Update the src with your desired URL
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
            title="Embedded Site"
            sandbox="allow-same-origin allow-scripts allow-popups"
          ></iframe>
        </div>
      </div>
      {/* Optional: Keep the chat messages or any other content below if needed */}
      {/* ... (Existing code for displaying chat messages, loader, etc.) */}
    </div>
  );
};

export default PolicyPage;