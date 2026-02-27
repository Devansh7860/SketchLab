import Image from "next/image"
import { Button } from "@/components/ui/button"

import { CreateOrganization } from "@clerk/nextjs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function EmptyOrg(){

    return (
        <div className="flex h-full flex-col mt-7 items-center">
            <Image src='/elements.svg' alt='empty org' width={300} height={300} />
            <h1 className="text-3xl font-semibold mt-4">
                Welcome to SketchLab
            </h1>
            <p className="text-muted-foreground mt-2 text-sm">
                Create or join an organization to get started.
            </p>
            <div className="mt-5">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Create Organization</Button>
                    </DialogTrigger>
                    <DialogContent className="p-0 bg-transparent border-none w-fit max-w-[500px]">
                        <CreateOrganization  />
                    </DialogContent>
                </Dialog>

            </div>

        </div>
    )

}