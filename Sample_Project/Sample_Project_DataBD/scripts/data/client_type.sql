﻿

BEGIN TRY

SET IDENTITY_INSERT [Client_Type] ON

MERGE INTO [Client_Type] AS Target
USING (VALUES
  (1,N'Nacional')
 ,(2,N'Comunitario')
 ,(3,N'Extranjero')
 ,(4,N'Potencial')
) AS Source ([IdType],[Descrip])
ON (Target.[IdType] = Source.[IdType])
WHEN MATCHED AND (
	NULLIF(Source.[Descrip], Target.[Descrip]) IS NOT NULL OR NULLIF(Target.[Descrip], Source.[Descrip]) IS NOT NULL) THEN
 UPDATE SET
  [Descrip] = Source.[Descrip]
WHEN NOT MATCHED BY TARGET THEN
 INSERT([IdType],[Descrip])
 VALUES(Source.[IdType],Source.[Descrip])
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

SET IDENTITY_INSERT [Client_Type] OFF
GO




