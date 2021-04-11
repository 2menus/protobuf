// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package menu

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion7

// MenuDataApiClient is the client API for MenuDataApi service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MenuDataApiClient interface {
	// menus
	Menu(ctx context.Context, in *MenuDetailsRequest, opts ...grpc.CallOption) (*MenuDetailsResponse, error)
	Menus(ctx context.Context, in *MenusRequest, opts ...grpc.CallOption) (*MenusResponse, error)
	CreateMenu(ctx context.Context, in *CreateMenuRequest, opts ...grpc.CallOption) (*CreateMenuResponse, error)
	UpdateMenu(ctx context.Context, in *UpdateMenuRequest, opts ...grpc.CallOption) (*UpdateMenuResponse, error)
	DeleteMenu(ctx context.Context, in *DeleteMenuRequest, opts ...grpc.CallOption) (*DeleteMenuResponse, error)
	// categories
	Category(ctx context.Context, in *CategoryDetailsRequest, opts ...grpc.CallOption) (*CategoryDetailsResponse, error)
	Categories(ctx context.Context, in *CategoriesRequest, opts ...grpc.CallOption) (*CategoriesResponse, error)
	CreateCategory(ctx context.Context, in *CreateCategoryRequest, opts ...grpc.CallOption) (*CreateCategoryResponse, error)
	UpdateCategory(ctx context.Context, in *UpdateCategoryRequest, opts ...grpc.CallOption) (*UpdateCategoryResponse, error)
	DeleteCategory(ctx context.Context, in *DeleteCategoryRequest, opts ...grpc.CallOption) (*DeleteCategoryResponse, error)
	LinkCategoryMenu(ctx context.Context, in *LinkCategoryMenuRequest, opts ...grpc.CallOption) (*LinkCategoryMenuResponse, error)
	// products
	Product(ctx context.Context, in *ProductDetailsRequest, opts ...grpc.CallOption) (*ProductDetailsResponse, error)
	Products(ctx context.Context, in *ProductsRequest, opts ...grpc.CallOption) (*ProductsResponse, error)
	CreateProduct(ctx context.Context, in *CreateProductRequest, opts ...grpc.CallOption) (*CreateProductResponse, error)
	UpdateProduct(ctx context.Context, in *UpdateProductRequest, opts ...grpc.CallOption) (*UpdateProductResponse, error)
	DeleteProduct(ctx context.Context, in *DeleteProductRequest, opts ...grpc.CallOption) (*DeleteProductResponse, error)
	LinkProductCategory(ctx context.Context, in *LinkProductCategoryRequest, opts ...grpc.CallOption) (*LinkProductCategoryResponse, error)
	// countries
	Countries(ctx context.Context, in *CountriesRequest, opts ...grpc.CallOption) (*CountriesResponse, error)
	// status
	SetStatusMessage(ctx context.Context, in *SetStatusMessageRequest, opts ...grpc.CallOption) (*SetStatusMessageResponse, error)
}

type menuDataApiClient struct {
	cc grpc.ClientConnInterface
}

func NewMenuDataApiClient(cc grpc.ClientConnInterface) MenuDataApiClient {
	return &menuDataApiClient{cc}
}

func (c *menuDataApiClient) Menu(ctx context.Context, in *MenuDetailsRequest, opts ...grpc.CallOption) (*MenuDetailsResponse, error) {
	out := new(MenuDetailsResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/Menu", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *menuDataApiClient) Menus(ctx context.Context, in *MenusRequest, opts ...grpc.CallOption) (*MenusResponse, error) {
	out := new(MenusResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/Menus", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *menuDataApiClient) CreateMenu(ctx context.Context, in *CreateMenuRequest, opts ...grpc.CallOption) (*CreateMenuResponse, error) {
	out := new(CreateMenuResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/CreateMenu", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *menuDataApiClient) UpdateMenu(ctx context.Context, in *UpdateMenuRequest, opts ...grpc.CallOption) (*UpdateMenuResponse, error) {
	out := new(UpdateMenuResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/UpdateMenu", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *menuDataApiClient) DeleteMenu(ctx context.Context, in *DeleteMenuRequest, opts ...grpc.CallOption) (*DeleteMenuResponse, error) {
	out := new(DeleteMenuResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/DeleteMenu", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *menuDataApiClient) Category(ctx context.Context, in *CategoryDetailsRequest, opts ...grpc.CallOption) (*CategoryDetailsResponse, error) {
	out := new(CategoryDetailsResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/Category", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *menuDataApiClient) Categories(ctx context.Context, in *CategoriesRequest, opts ...grpc.CallOption) (*CategoriesResponse, error) {
	out := new(CategoriesResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/Categories", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *menuDataApiClient) CreateCategory(ctx context.Context, in *CreateCategoryRequest, opts ...grpc.CallOption) (*CreateCategoryResponse, error) {
	out := new(CreateCategoryResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/CreateCategory", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *menuDataApiClient) UpdateCategory(ctx context.Context, in *UpdateCategoryRequest, opts ...grpc.CallOption) (*UpdateCategoryResponse, error) {
	out := new(UpdateCategoryResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/UpdateCategory", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *menuDataApiClient) DeleteCategory(ctx context.Context, in *DeleteCategoryRequest, opts ...grpc.CallOption) (*DeleteCategoryResponse, error) {
	out := new(DeleteCategoryResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/DeleteCategory", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *menuDataApiClient) LinkCategoryMenu(ctx context.Context, in *LinkCategoryMenuRequest, opts ...grpc.CallOption) (*LinkCategoryMenuResponse, error) {
	out := new(LinkCategoryMenuResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/LinkCategoryMenu", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *menuDataApiClient) Product(ctx context.Context, in *ProductDetailsRequest, opts ...grpc.CallOption) (*ProductDetailsResponse, error) {
	out := new(ProductDetailsResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/Product", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *menuDataApiClient) Products(ctx context.Context, in *ProductsRequest, opts ...grpc.CallOption) (*ProductsResponse, error) {
	out := new(ProductsResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/Products", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *menuDataApiClient) CreateProduct(ctx context.Context, in *CreateProductRequest, opts ...grpc.CallOption) (*CreateProductResponse, error) {
	out := new(CreateProductResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/CreateProduct", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *menuDataApiClient) UpdateProduct(ctx context.Context, in *UpdateProductRequest, opts ...grpc.CallOption) (*UpdateProductResponse, error) {
	out := new(UpdateProductResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/UpdateProduct", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *menuDataApiClient) DeleteProduct(ctx context.Context, in *DeleteProductRequest, opts ...grpc.CallOption) (*DeleteProductResponse, error) {
	out := new(DeleteProductResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/DeleteProduct", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *menuDataApiClient) LinkProductCategory(ctx context.Context, in *LinkProductCategoryRequest, opts ...grpc.CallOption) (*LinkProductCategoryResponse, error) {
	out := new(LinkProductCategoryResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/LinkProductCategory", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *menuDataApiClient) Countries(ctx context.Context, in *CountriesRequest, opts ...grpc.CallOption) (*CountriesResponse, error) {
	out := new(CountriesResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/Countries", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *menuDataApiClient) SetStatusMessage(ctx context.Context, in *SetStatusMessageRequest, opts ...grpc.CallOption) (*SetStatusMessageResponse, error) {
	out := new(SetStatusMessageResponse)
	err := c.cc.Invoke(ctx, "/menu.v2.MenuDataApi/SetStatusMessage", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MenuDataApiServer is the server API for MenuDataApi service.
// All implementations must embed UnimplementedMenuDataApiServer
// for forward compatibility
type MenuDataApiServer interface {
	// menus
	Menu(context.Context, *MenuDetailsRequest) (*MenuDetailsResponse, error)
	Menus(context.Context, *MenusRequest) (*MenusResponse, error)
	CreateMenu(context.Context, *CreateMenuRequest) (*CreateMenuResponse, error)
	UpdateMenu(context.Context, *UpdateMenuRequest) (*UpdateMenuResponse, error)
	DeleteMenu(context.Context, *DeleteMenuRequest) (*DeleteMenuResponse, error)
	// categories
	Category(context.Context, *CategoryDetailsRequest) (*CategoryDetailsResponse, error)
	Categories(context.Context, *CategoriesRequest) (*CategoriesResponse, error)
	CreateCategory(context.Context, *CreateCategoryRequest) (*CreateCategoryResponse, error)
	UpdateCategory(context.Context, *UpdateCategoryRequest) (*UpdateCategoryResponse, error)
	DeleteCategory(context.Context, *DeleteCategoryRequest) (*DeleteCategoryResponse, error)
	LinkCategoryMenu(context.Context, *LinkCategoryMenuRequest) (*LinkCategoryMenuResponse, error)
	// products
	Product(context.Context, *ProductDetailsRequest) (*ProductDetailsResponse, error)
	Products(context.Context, *ProductsRequest) (*ProductsResponse, error)
	CreateProduct(context.Context, *CreateProductRequest) (*CreateProductResponse, error)
	UpdateProduct(context.Context, *UpdateProductRequest) (*UpdateProductResponse, error)
	DeleteProduct(context.Context, *DeleteProductRequest) (*DeleteProductResponse, error)
	LinkProductCategory(context.Context, *LinkProductCategoryRequest) (*LinkProductCategoryResponse, error)
	// countries
	Countries(context.Context, *CountriesRequest) (*CountriesResponse, error)
	// status
	SetStatusMessage(context.Context, *SetStatusMessageRequest) (*SetStatusMessageResponse, error)
	mustEmbedUnimplementedMenuDataApiServer()
}

// UnimplementedMenuDataApiServer must be embedded to have forward compatible implementations.
type UnimplementedMenuDataApiServer struct {
}

func (UnimplementedMenuDataApiServer) Menu(context.Context, *MenuDetailsRequest) (*MenuDetailsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Menu not implemented")
}
func (UnimplementedMenuDataApiServer) Menus(context.Context, *MenusRequest) (*MenusResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Menus not implemented")
}
func (UnimplementedMenuDataApiServer) CreateMenu(context.Context, *CreateMenuRequest) (*CreateMenuResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateMenu not implemented")
}
func (UnimplementedMenuDataApiServer) UpdateMenu(context.Context, *UpdateMenuRequest) (*UpdateMenuResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateMenu not implemented")
}
func (UnimplementedMenuDataApiServer) DeleteMenu(context.Context, *DeleteMenuRequest) (*DeleteMenuResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteMenu not implemented")
}
func (UnimplementedMenuDataApiServer) Category(context.Context, *CategoryDetailsRequest) (*CategoryDetailsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Category not implemented")
}
func (UnimplementedMenuDataApiServer) Categories(context.Context, *CategoriesRequest) (*CategoriesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Categories not implemented")
}
func (UnimplementedMenuDataApiServer) CreateCategory(context.Context, *CreateCategoryRequest) (*CreateCategoryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateCategory not implemented")
}
func (UnimplementedMenuDataApiServer) UpdateCategory(context.Context, *UpdateCategoryRequest) (*UpdateCategoryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateCategory not implemented")
}
func (UnimplementedMenuDataApiServer) DeleteCategory(context.Context, *DeleteCategoryRequest) (*DeleteCategoryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteCategory not implemented")
}
func (UnimplementedMenuDataApiServer) LinkCategoryMenu(context.Context, *LinkCategoryMenuRequest) (*LinkCategoryMenuResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method LinkCategoryMenu not implemented")
}
func (UnimplementedMenuDataApiServer) Product(context.Context, *ProductDetailsRequest) (*ProductDetailsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Product not implemented")
}
func (UnimplementedMenuDataApiServer) Products(context.Context, *ProductsRequest) (*ProductsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Products not implemented")
}
func (UnimplementedMenuDataApiServer) CreateProduct(context.Context, *CreateProductRequest) (*CreateProductResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateProduct not implemented")
}
func (UnimplementedMenuDataApiServer) UpdateProduct(context.Context, *UpdateProductRequest) (*UpdateProductResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateProduct not implemented")
}
func (UnimplementedMenuDataApiServer) DeleteProduct(context.Context, *DeleteProductRequest) (*DeleteProductResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteProduct not implemented")
}
func (UnimplementedMenuDataApiServer) LinkProductCategory(context.Context, *LinkProductCategoryRequest) (*LinkProductCategoryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method LinkProductCategory not implemented")
}
func (UnimplementedMenuDataApiServer) Countries(context.Context, *CountriesRequest) (*CountriesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Countries not implemented")
}
func (UnimplementedMenuDataApiServer) SetStatusMessage(context.Context, *SetStatusMessageRequest) (*SetStatusMessageResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetStatusMessage not implemented")
}
func (UnimplementedMenuDataApiServer) mustEmbedUnimplementedMenuDataApiServer() {}

// UnsafeMenuDataApiServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MenuDataApiServer will
// result in compilation errors.
type UnsafeMenuDataApiServer interface {
	mustEmbedUnimplementedMenuDataApiServer()
}

func RegisterMenuDataApiServer(s grpc.ServiceRegistrar, srv MenuDataApiServer) {
	s.RegisterService(&MenuDataApi_ServiceDesc, srv)
}

func _MenuDataApi_Menu_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MenuDetailsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).Menu(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/Menu",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).Menu(ctx, req.(*MenuDetailsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MenuDataApi_Menus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MenusRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).Menus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/Menus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).Menus(ctx, req.(*MenusRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MenuDataApi_CreateMenu_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateMenuRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).CreateMenu(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/CreateMenu",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).CreateMenu(ctx, req.(*CreateMenuRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MenuDataApi_UpdateMenu_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateMenuRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).UpdateMenu(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/UpdateMenu",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).UpdateMenu(ctx, req.(*UpdateMenuRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MenuDataApi_DeleteMenu_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteMenuRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).DeleteMenu(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/DeleteMenu",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).DeleteMenu(ctx, req.(*DeleteMenuRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MenuDataApi_Category_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CategoryDetailsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).Category(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/Category",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).Category(ctx, req.(*CategoryDetailsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MenuDataApi_Categories_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CategoriesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).Categories(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/Categories",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).Categories(ctx, req.(*CategoriesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MenuDataApi_CreateCategory_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateCategoryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).CreateCategory(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/CreateCategory",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).CreateCategory(ctx, req.(*CreateCategoryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MenuDataApi_UpdateCategory_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateCategoryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).UpdateCategory(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/UpdateCategory",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).UpdateCategory(ctx, req.(*UpdateCategoryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MenuDataApi_DeleteCategory_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteCategoryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).DeleteCategory(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/DeleteCategory",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).DeleteCategory(ctx, req.(*DeleteCategoryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MenuDataApi_LinkCategoryMenu_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LinkCategoryMenuRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).LinkCategoryMenu(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/LinkCategoryMenu",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).LinkCategoryMenu(ctx, req.(*LinkCategoryMenuRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MenuDataApi_Product_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProductDetailsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).Product(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/Product",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).Product(ctx, req.(*ProductDetailsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MenuDataApi_Products_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ProductsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).Products(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/Products",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).Products(ctx, req.(*ProductsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MenuDataApi_CreateProduct_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateProductRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).CreateProduct(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/CreateProduct",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).CreateProduct(ctx, req.(*CreateProductRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MenuDataApi_UpdateProduct_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateProductRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).UpdateProduct(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/UpdateProduct",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).UpdateProduct(ctx, req.(*UpdateProductRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MenuDataApi_DeleteProduct_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteProductRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).DeleteProduct(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/DeleteProduct",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).DeleteProduct(ctx, req.(*DeleteProductRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MenuDataApi_LinkProductCategory_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LinkProductCategoryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).LinkProductCategory(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/LinkProductCategory",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).LinkProductCategory(ctx, req.(*LinkProductCategoryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MenuDataApi_Countries_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CountriesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).Countries(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/Countries",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).Countries(ctx, req.(*CountriesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MenuDataApi_SetStatusMessage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetStatusMessageRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MenuDataApiServer).SetStatusMessage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/menu.v2.MenuDataApi/SetStatusMessage",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MenuDataApiServer).SetStatusMessage(ctx, req.(*SetStatusMessageRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// MenuDataApi_ServiceDesc is the grpc.ServiceDesc for MenuDataApi service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MenuDataApi_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "menu.v2.MenuDataApi",
	HandlerType: (*MenuDataApiServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Menu",
			Handler:    _MenuDataApi_Menu_Handler,
		},
		{
			MethodName: "Menus",
			Handler:    _MenuDataApi_Menus_Handler,
		},
		{
			MethodName: "CreateMenu",
			Handler:    _MenuDataApi_CreateMenu_Handler,
		},
		{
			MethodName: "UpdateMenu",
			Handler:    _MenuDataApi_UpdateMenu_Handler,
		},
		{
			MethodName: "DeleteMenu",
			Handler:    _MenuDataApi_DeleteMenu_Handler,
		},
		{
			MethodName: "Category",
			Handler:    _MenuDataApi_Category_Handler,
		},
		{
			MethodName: "Categories",
			Handler:    _MenuDataApi_Categories_Handler,
		},
		{
			MethodName: "CreateCategory",
			Handler:    _MenuDataApi_CreateCategory_Handler,
		},
		{
			MethodName: "UpdateCategory",
			Handler:    _MenuDataApi_UpdateCategory_Handler,
		},
		{
			MethodName: "DeleteCategory",
			Handler:    _MenuDataApi_DeleteCategory_Handler,
		},
		{
			MethodName: "LinkCategoryMenu",
			Handler:    _MenuDataApi_LinkCategoryMenu_Handler,
		},
		{
			MethodName: "Product",
			Handler:    _MenuDataApi_Product_Handler,
		},
		{
			MethodName: "Products",
			Handler:    _MenuDataApi_Products_Handler,
		},
		{
			MethodName: "CreateProduct",
			Handler:    _MenuDataApi_CreateProduct_Handler,
		},
		{
			MethodName: "UpdateProduct",
			Handler:    _MenuDataApi_UpdateProduct_Handler,
		},
		{
			MethodName: "DeleteProduct",
			Handler:    _MenuDataApi_DeleteProduct_Handler,
		},
		{
			MethodName: "LinkProductCategory",
			Handler:    _MenuDataApi_LinkProductCategory_Handler,
		},
		{
			MethodName: "Countries",
			Handler:    _MenuDataApi_Countries_Handler,
		},
		{
			MethodName: "SetStatusMessage",
			Handler:    _MenuDataApi_SetStatusMessage_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "menu/v2/menu_api.proto",
}
