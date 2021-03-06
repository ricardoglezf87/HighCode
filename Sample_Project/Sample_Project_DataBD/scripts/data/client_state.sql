﻿

BEGIN TRY

SET IDENTITY_INSERT [Client_State] ON

MERGE INTO [Client_State] AS Target
USING (VALUES
  (1,N'Active')
 ,(2,N'Locked')
) AS Source ([IdState],[Descrip])
ON (Target.[IdState] = Source.[IdState])
WHEN MATCHED AND (
	NULLIF(Source.[Descrip], Target.[Descrip]) IS NOT NULL OR NULLIF(Target.[Descrip], Source.[Descrip]) IS NOT NULL) THEN
 UPDATE SET
  [Descrip] = Source.[Descrip]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([IdState],[Descrip])
 VALUES(Source.[IdState],Source.[Descrip])
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

SET IDENTITY_INSERT [Client_State] OFF
GO




