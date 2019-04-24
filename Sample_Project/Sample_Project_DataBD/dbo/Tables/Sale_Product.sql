﻿CREATE TABLE [dbo].[Sale_Product] (
    [IdSale]    INT NOT NULL,
    [IdProduct] INT NOT NULL,
    CONSTRAINT [FK_Sale_Product_Product] FOREIGN KEY ([IdProduct]) REFERENCES [dbo].[Product] ([IdProduct]),
    CONSTRAINT [FK_Sale_Product_Sale] FOREIGN KEY ([IdSale]) REFERENCES [dbo].[Sale] ([IdSale])
);
