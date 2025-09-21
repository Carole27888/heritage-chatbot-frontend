
import { FileText, Upload } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";

export type AIClaimFileUploadProps = {
  claimNumber: number;
  totalFiles: number;
  uploadedFiles: number;
  uploadingFile: string;
};

function AIClaimFileUpload({ claimNumber, totalFiles, uploadedFiles, uploadingFile }: AIClaimFileUploadProps) {
  const progress = (uploadedFiles / totalFiles) * 100;

  return (
    <Card className="w-full">
      {/* Header */}
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" /> Claim Upload
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Uploading for claim #{claimNumber}
        </p>
      </CardHeader>

      {/* Content */}
      <CardContent>
        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between mb-1 text-xs">
            <span>Progress</span>
            <span>
              {uploadedFiles}/{totalFiles}
            </span>
          </div>
          <Progress value={progress} />
        </div>

        {/* Current file */}
        <div className="flex items-center justify-between bg-muted rounded-md p-2 gap-3 text-xs">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-blue-600" />
            <span>{uploadingFile}</span>
          </div>
          <Badge variant="outline">Required</Badge>
        </div>

        {/* Upload button */}
        <Button className="mt-3 w-full flex items-center gap-2">
          <Upload className="h-4 w-4" /> Upload
        </Button>

        <p className="text-xs text-muted-foreground mt-2 text-center">
          Please upload the required files for your claim.
        </p>
      </CardContent>
    </Card>
  );
}

export default AIClaimFileUpload;
