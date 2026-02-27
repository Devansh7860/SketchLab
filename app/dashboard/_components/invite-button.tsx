import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Invite members
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0 w-full max-w-[95vw] sm:max-w-[900px] max-h-[90vh] overflow-y-auto overflow-x-hidden border-none">
        <OrganizationProfile
          appearance={{
            elements: {
              rootBox: {
                width: "100%",
              },
              card: {
                width: "100%",
                boxShadow: "none",
                border: "none",
              },
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};