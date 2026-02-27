"use client"

import { Plus } from "lucide-react"
import { CreateOrganization } from "@clerk/nextjs"

import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function NewButton() {
    return (
        <Dialog>
            <DialogTrigger asChild >
                <div className="aspect-square">
                    <button className="bg-white/45 h-full w-full flex justify-center items-center rounded-md opacity-60 hover:opacity-100 transition">
                        <Plus className="text-white" />
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent className="p-0 w-fit bg-transparent border-none  ">

                {/* <DialogHeader>
                    <DialogTitle className="text-white mb-2">f</DialogTitle>
                </DialogHeader> */}
                <CreateOrganization />
            </DialogContent>
        </Dialog>

    )
}