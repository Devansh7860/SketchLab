import Image from "next/image"
import { Button } from "@/components/ui/button"

import { CreateOrganization } from "@clerk/nextjs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function EmptyOrg(){

    return (
        <div className="flex h-full flex-col items-center justify-center">
            <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-violet-400/20 to-indigo-400/20 rounded-full blur-3xl" />
                <Image src='/elements.svg' alt='empty org' width={240} height={240} className="relative" />
            </div>
            <h1 className="text-2xl font-bold mt-6 tracking-tight">
                Welcome to <span className="bg-linear-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">SketchLab</span>
            </h1>
            <p className="text-muted-foreground mt-2 text-sm text-center max-w-sm">
                Create or join an organization to start collaborating on whiteboards in real time.
            </p>
            <div className="mt-6">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-md px-6">
                            Create Organization
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="p-0 bg-transparent border-none w-fit max-w-[500px]">
                        <CreateOrganization  />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )

}