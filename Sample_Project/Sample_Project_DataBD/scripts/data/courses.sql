﻿

BEGIN TRY

SET IDENTITY_INSERT [Courses] ON

MERGE INTO [Courses] AS Target
USING (VALUES
  (1,N'Level II')
) AS Source ([CourseId],[Course])
ON (Target.[CourseId] = Source.[CourseId])
WHEN MATCHED AND (
	NULLIF(Source.[Course], Target.[Course]) IS NOT NULL OR NULLIF(Target.[Course], Source.[Course]) IS NOT NULL) THEN
 UPDATE SET
  [Course] = Source.[Course]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([CourseId],[Course])
 VALUES(Source.[CourseId],Source.[Course])
WHEN NOT MATCHED BY SOURCE THEN 
 DELETE
;
END TRY
BEGIN CATCH
    DECLARE @ERRORNUMBER	INT,@ERRORMSG		VARCHAR(MAX),@ERRORSTATE		INT
    SELECT @ERRORNUMBER = 50000 + ERROR_NUMBER(),@ERRORMSG = ERROR_MESSAGE(), @ERRORSTATE = ERROR_STATE();
    THROW @ERRORNUMBER, @ERRORMSG, @ERRORSTATE
END CATCH
GO

SET IDENTITY_INSERT [Courses] OFF
GO



