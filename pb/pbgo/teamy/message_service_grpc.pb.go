// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.4.0
// - protoc             v5.27.1
// source: teamy/message_service.proto

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
	MessageService_GetMessage_FullMethodName    = "/MessageService/GetMessage"
	MessageService_ListMessages_FullMethodName  = "/MessageService/ListMessages"
	MessageService_CreateMessage_FullMethodName = "/MessageService/CreateMessage"
	MessageService_UpdateMessage_FullMethodName = "/MessageService/UpdateMessage"
	MessageService_DeleteMessage_FullMethodName = "/MessageService/DeleteMessage"
)

// MessageServiceClient is the client API for MessageService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MessageServiceClient interface {
	GetMessage(ctx context.Context, in *GetMessageRequest, opts ...grpc.CallOption) (*GetMessageResponse, error)
	ListMessages(ctx context.Context, in *ListMessagesRequest, opts ...grpc.CallOption) (*ListMessagesResponse, error)
	CreateMessage(ctx context.Context, in *CreateMessageRequest, opts ...grpc.CallOption) (*CreateMessageResponse, error)
	UpdateMessage(ctx context.Context, in *UpdateMessageRequest, opts ...grpc.CallOption) (*UpdateMessageResponse, error)
	DeleteMessage(ctx context.Context, in *DeleteMessageRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
}

type messageServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewMessageServiceClient(cc grpc.ClientConnInterface) MessageServiceClient {
	return &messageServiceClient{cc}
}

func (c *messageServiceClient) GetMessage(ctx context.Context, in *GetMessageRequest, opts ...grpc.CallOption) (*GetMessageResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetMessageResponse)
	err := c.cc.Invoke(ctx, MessageService_GetMessage_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *messageServiceClient) ListMessages(ctx context.Context, in *ListMessagesRequest, opts ...grpc.CallOption) (*ListMessagesResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ListMessagesResponse)
	err := c.cc.Invoke(ctx, MessageService_ListMessages_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *messageServiceClient) CreateMessage(ctx context.Context, in *CreateMessageRequest, opts ...grpc.CallOption) (*CreateMessageResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(CreateMessageResponse)
	err := c.cc.Invoke(ctx, MessageService_CreateMessage_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *messageServiceClient) UpdateMessage(ctx context.Context, in *UpdateMessageRequest, opts ...grpc.CallOption) (*UpdateMessageResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(UpdateMessageResponse)
	err := c.cc.Invoke(ctx, MessageService_UpdateMessage_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *messageServiceClient) DeleteMessage(ctx context.Context, in *DeleteMessageRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, MessageService_DeleteMessage_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// MessageServiceServer is the server API for MessageService service.
// All implementations must embed UnimplementedMessageServiceServer
// for forward compatibility
type MessageServiceServer interface {
	GetMessage(context.Context, *GetMessageRequest) (*GetMessageResponse, error)
	ListMessages(context.Context, *ListMessagesRequest) (*ListMessagesResponse, error)
	CreateMessage(context.Context, *CreateMessageRequest) (*CreateMessageResponse, error)
	UpdateMessage(context.Context, *UpdateMessageRequest) (*UpdateMessageResponse, error)
	DeleteMessage(context.Context, *DeleteMessageRequest) (*emptypb.Empty, error)
	mustEmbedUnimplementedMessageServiceServer()
}

// UnimplementedMessageServiceServer must be embedded to have forward compatible implementations.
type UnimplementedMessageServiceServer struct {
}

func (UnimplementedMessageServiceServer) GetMessage(context.Context, *GetMessageRequest) (*GetMessageResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMessage not implemented")
}
func (UnimplementedMessageServiceServer) ListMessages(context.Context, *ListMessagesRequest) (*ListMessagesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListMessages not implemented")
}
func (UnimplementedMessageServiceServer) CreateMessage(context.Context, *CreateMessageRequest) (*CreateMessageResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateMessage not implemented")
}
func (UnimplementedMessageServiceServer) UpdateMessage(context.Context, *UpdateMessageRequest) (*UpdateMessageResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateMessage not implemented")
}
func (UnimplementedMessageServiceServer) DeleteMessage(context.Context, *DeleteMessageRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteMessage not implemented")
}
func (UnimplementedMessageServiceServer) mustEmbedUnimplementedMessageServiceServer() {}

// UnsafeMessageServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MessageServiceServer will
// result in compilation errors.
type UnsafeMessageServiceServer interface {
	mustEmbedUnimplementedMessageServiceServer()
}

func RegisterMessageServiceServer(s grpc.ServiceRegistrar, srv MessageServiceServer) {
	s.RegisterService(&MessageService_ServiceDesc, srv)
}

func _MessageService_GetMessage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMessageRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MessageServiceServer).GetMessage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: MessageService_GetMessage_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MessageServiceServer).GetMessage(ctx, req.(*GetMessageRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MessageService_ListMessages_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListMessagesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MessageServiceServer).ListMessages(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: MessageService_ListMessages_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MessageServiceServer).ListMessages(ctx, req.(*ListMessagesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MessageService_CreateMessage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateMessageRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MessageServiceServer).CreateMessage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: MessageService_CreateMessage_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MessageServiceServer).CreateMessage(ctx, req.(*CreateMessageRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MessageService_UpdateMessage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateMessageRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MessageServiceServer).UpdateMessage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: MessageService_UpdateMessage_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MessageServiceServer).UpdateMessage(ctx, req.(*UpdateMessageRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MessageService_DeleteMessage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteMessageRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MessageServiceServer).DeleteMessage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: MessageService_DeleteMessage_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MessageServiceServer).DeleteMessage(ctx, req.(*DeleteMessageRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// MessageService_ServiceDesc is the grpc.ServiceDesc for MessageService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MessageService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "MessageService",
	HandlerType: (*MessageServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetMessage",
			Handler:    _MessageService_GetMessage_Handler,
		},
		{
			MethodName: "ListMessages",
			Handler:    _MessageService_ListMessages_Handler,
		},
		{
			MethodName: "CreateMessage",
			Handler:    _MessageService_CreateMessage_Handler,
		},
		{
			MethodName: "UpdateMessage",
			Handler:    _MessageService_UpdateMessage_Handler,
		},
		{
			MethodName: "DeleteMessage",
			Handler:    _MessageService_DeleteMessage_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "teamy/message_service.proto",
}
