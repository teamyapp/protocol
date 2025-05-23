// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.4.0
// - protoc             v5.27.1
// source: teamy/attachment_service.proto

package teamy

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.62.0 or later.
const _ = grpc.SupportPackageIsVersion8

const (
	AttachmentService_GetAttachment_FullMethodName                         = "/AttachmentService/GetAttachment"
	AttachmentService_GetAttachmentList_FullMethodName                     = "/AttachmentService/GetAttachmentList"
	AttachmentService_ListAttachments_FullMethodName                       = "/AttachmentService/ListAttachments"
	AttachmentService_CreateAttachmentListFileUploadSession_FullMethodName = "/AttachmentService/CreateAttachmentListFileUploadSession"
	AttachmentService_FinishAttachmentListFileUploadSession_FullMethodName = "/AttachmentService/FinishAttachmentListFileUploadSession"
	AttachmentService_DeleteAttachmentListFile_FullMethodName              = "/AttachmentService/DeleteAttachmentListFile"
)

// AttachmentServiceClient is the client API for AttachmentService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AttachmentServiceClient interface {
	GetAttachment(ctx context.Context, in *GetAttachmentRequest, opts ...grpc.CallOption) (*GetAttachmentResponse, error)
	GetAttachmentList(ctx context.Context, in *GetAttachmentListRequest, opts ...grpc.CallOption) (*GetAttachmentListResponse, error)
	ListAttachments(ctx context.Context, in *ListAttachmentsRequest, opts ...grpc.CallOption) (*ListAttachmentsResponse, error)
	CreateAttachmentListFileUploadSession(ctx context.Context, in *CreateAttachmentListFileUploadSessionRequest, opts ...grpc.CallOption) (*CreateAttachmentListFileUploadSessionResponse, error)
	FinishAttachmentListFileUploadSession(ctx context.Context, in *FinishAttachmentListFileUploadSessionRequest, opts ...grpc.CallOption) (*FinishAttachmentListFileUploadSessionResponse, error)
	DeleteAttachmentListFile(ctx context.Context, in *DeleteAttachmentListFileRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
}

type attachmentServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAttachmentServiceClient(cc grpc.ClientConnInterface) AttachmentServiceClient {
	return &attachmentServiceClient{cc}
}

func (c *attachmentServiceClient) GetAttachment(ctx context.Context, in *GetAttachmentRequest, opts ...grpc.CallOption) (*GetAttachmentResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetAttachmentResponse)
	err := c.cc.Invoke(ctx, AttachmentService_GetAttachment_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *attachmentServiceClient) GetAttachmentList(ctx context.Context, in *GetAttachmentListRequest, opts ...grpc.CallOption) (*GetAttachmentListResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetAttachmentListResponse)
	err := c.cc.Invoke(ctx, AttachmentService_GetAttachmentList_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *attachmentServiceClient) ListAttachments(ctx context.Context, in *ListAttachmentsRequest, opts ...grpc.CallOption) (*ListAttachmentsResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ListAttachmentsResponse)
	err := c.cc.Invoke(ctx, AttachmentService_ListAttachments_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *attachmentServiceClient) CreateAttachmentListFileUploadSession(ctx context.Context, in *CreateAttachmentListFileUploadSessionRequest, opts ...grpc.CallOption) (*CreateAttachmentListFileUploadSessionResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(CreateAttachmentListFileUploadSessionResponse)
	err := c.cc.Invoke(ctx, AttachmentService_CreateAttachmentListFileUploadSession_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *attachmentServiceClient) FinishAttachmentListFileUploadSession(ctx context.Context, in *FinishAttachmentListFileUploadSessionRequest, opts ...grpc.CallOption) (*FinishAttachmentListFileUploadSessionResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(FinishAttachmentListFileUploadSessionResponse)
	err := c.cc.Invoke(ctx, AttachmentService_FinishAttachmentListFileUploadSession_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *attachmentServiceClient) DeleteAttachmentListFile(ctx context.Context, in *DeleteAttachmentListFileRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, AttachmentService_DeleteAttachmentListFile_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AttachmentServiceServer is the server API for AttachmentService service.
// All implementations must embed UnimplementedAttachmentServiceServer
// for forward compatibility
type AttachmentServiceServer interface {
	GetAttachment(context.Context, *GetAttachmentRequest) (*GetAttachmentResponse, error)
	GetAttachmentList(context.Context, *GetAttachmentListRequest) (*GetAttachmentListResponse, error)
	ListAttachments(context.Context, *ListAttachmentsRequest) (*ListAttachmentsResponse, error)
	CreateAttachmentListFileUploadSession(context.Context, *CreateAttachmentListFileUploadSessionRequest) (*CreateAttachmentListFileUploadSessionResponse, error)
	FinishAttachmentListFileUploadSession(context.Context, *FinishAttachmentListFileUploadSessionRequest) (*FinishAttachmentListFileUploadSessionResponse, error)
	DeleteAttachmentListFile(context.Context, *DeleteAttachmentListFileRequest) (*emptypb.Empty, error)
	mustEmbedUnimplementedAttachmentServiceServer()
}

// UnimplementedAttachmentServiceServer must be embedded to have forward compatible implementations.
type UnimplementedAttachmentServiceServer struct {
}

func (UnimplementedAttachmentServiceServer) GetAttachment(context.Context, *GetAttachmentRequest) (*GetAttachmentResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAttachment not implemented")
}
func (UnimplementedAttachmentServiceServer) GetAttachmentList(context.Context, *GetAttachmentListRequest) (*GetAttachmentListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAttachmentList not implemented")
}
func (UnimplementedAttachmentServiceServer) ListAttachments(context.Context, *ListAttachmentsRequest) (*ListAttachmentsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListAttachments not implemented")
}
func (UnimplementedAttachmentServiceServer) CreateAttachmentListFileUploadSession(context.Context, *CreateAttachmentListFileUploadSessionRequest) (*CreateAttachmentListFileUploadSessionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateAttachmentListFileUploadSession not implemented")
}
func (UnimplementedAttachmentServiceServer) FinishAttachmentListFileUploadSession(context.Context, *FinishAttachmentListFileUploadSessionRequest) (*FinishAttachmentListFileUploadSessionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FinishAttachmentListFileUploadSession not implemented")
}
func (UnimplementedAttachmentServiceServer) DeleteAttachmentListFile(context.Context, *DeleteAttachmentListFileRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteAttachmentListFile not implemented")
}
func (UnimplementedAttachmentServiceServer) mustEmbedUnimplementedAttachmentServiceServer() {}

// UnsafeAttachmentServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AttachmentServiceServer will
// result in compilation errors.
type UnsafeAttachmentServiceServer interface {
	mustEmbedUnimplementedAttachmentServiceServer()
}

func RegisterAttachmentServiceServer(s grpc.ServiceRegistrar, srv AttachmentServiceServer) {
	s.RegisterService(&AttachmentService_ServiceDesc, srv)
}

func _AttachmentService_GetAttachment_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAttachmentRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AttachmentServiceServer).GetAttachment(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AttachmentService_GetAttachment_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AttachmentServiceServer).GetAttachment(ctx, req.(*GetAttachmentRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AttachmentService_GetAttachmentList_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAttachmentListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AttachmentServiceServer).GetAttachmentList(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AttachmentService_GetAttachmentList_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AttachmentServiceServer).GetAttachmentList(ctx, req.(*GetAttachmentListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AttachmentService_ListAttachments_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListAttachmentsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AttachmentServiceServer).ListAttachments(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AttachmentService_ListAttachments_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AttachmentServiceServer).ListAttachments(ctx, req.(*ListAttachmentsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AttachmentService_CreateAttachmentListFileUploadSession_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateAttachmentListFileUploadSessionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AttachmentServiceServer).CreateAttachmentListFileUploadSession(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AttachmentService_CreateAttachmentListFileUploadSession_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AttachmentServiceServer).CreateAttachmentListFileUploadSession(ctx, req.(*CreateAttachmentListFileUploadSessionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AttachmentService_FinishAttachmentListFileUploadSession_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FinishAttachmentListFileUploadSessionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AttachmentServiceServer).FinishAttachmentListFileUploadSession(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AttachmentService_FinishAttachmentListFileUploadSession_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AttachmentServiceServer).FinishAttachmentListFileUploadSession(ctx, req.(*FinishAttachmentListFileUploadSessionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AttachmentService_DeleteAttachmentListFile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteAttachmentListFileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AttachmentServiceServer).DeleteAttachmentListFile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AttachmentService_DeleteAttachmentListFile_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AttachmentServiceServer).DeleteAttachmentListFile(ctx, req.(*DeleteAttachmentListFileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AttachmentService_ServiceDesc is the grpc.ServiceDesc for AttachmentService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AttachmentService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "AttachmentService",
	HandlerType: (*AttachmentServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetAttachment",
			Handler:    _AttachmentService_GetAttachment_Handler,
		},
		{
			MethodName: "GetAttachmentList",
			Handler:    _AttachmentService_GetAttachmentList_Handler,
		},
		{
			MethodName: "ListAttachments",
			Handler:    _AttachmentService_ListAttachments_Handler,
		},
		{
			MethodName: "CreateAttachmentListFileUploadSession",
			Handler:    _AttachmentService_CreateAttachmentListFileUploadSession_Handler,
		},
		{
			MethodName: "FinishAttachmentListFileUploadSession",
			Handler:    _AttachmentService_FinishAttachmentListFileUploadSession_Handler,
		},
		{
			MethodName: "DeleteAttachmentListFile",
			Handler:    _AttachmentService_DeleteAttachmentListFile_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "teamy/attachment_service.proto",
}
