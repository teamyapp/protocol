// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.4.0
// - protoc             v5.27.1
// source: teamy/sprint_service.proto

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
	SprintService_GetSprint_FullMethodName                  = "/SprintService/GetSprint"
	SprintService_ListSprints_FullMethodName                = "/SprintService/ListSprints"
	SprintService_CreateSprint_FullMethodName               = "/SprintService/CreateSprint"
	SprintService_DeleteSprint_FullMethodName               = "/SprintService/DeleteSprint"
	SprintService_GetActiveSprint_FullMethodName            = "/SprintService/GetActiveSprint"
	SprintService_AddTaskToSprint_FullMethodName            = "/SprintService/AddTaskToSprint"
	SprintService_RemoveTaskFromSprint_FullMethodName       = "/SprintService/RemoveTaskFromSprint"
	SprintService_AddTeamMemberToSprint_FullMethodName      = "/SprintService/AddTeamMemberToSprint"
	SprintService_RemoveTeamMemberFromSprint_FullMethodName = "/SprintService/RemoveTeamMemberFromSprint"
	SprintService_MoveTasksToSprint_FullMethodName          = "/SprintService/MoveTasksToSprint"
	SprintService_CopyTasksToSprint_FullMethodName          = "/SprintService/CopyTasksToSprint"
)

// SprintServiceClient is the client API for SprintService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type SprintServiceClient interface {
	GetSprint(ctx context.Context, in *GetSprintRequest, opts ...grpc.CallOption) (*GetSprintResponse, error)
	ListSprints(ctx context.Context, in *ListSprintsRequest, opts ...grpc.CallOption) (*ListSprintsResponse, error)
	CreateSprint(ctx context.Context, in *CreateSprintRequest, opts ...grpc.CallOption) (*CreateSprintResponse, error)
	DeleteSprint(ctx context.Context, in *DeleteSprintRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	GetActiveSprint(ctx context.Context, in *GetActiveSprintRequest, opts ...grpc.CallOption) (*GetActiveSprintResponse, error)
	AddTaskToSprint(ctx context.Context, in *AddTaskToSprintRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	RemoveTaskFromSprint(ctx context.Context, in *RemoveTaskToSprintRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	AddTeamMemberToSprint(ctx context.Context, in *AddTeamMemberToSprintRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	RemoveTeamMemberFromSprint(ctx context.Context, in *RemoveTeamMemberFromSprintRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	MoveTasksToSprint(ctx context.Context, in *MoveTasksToSprintRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	CopyTasksToSprint(ctx context.Context, in *CopyTasksToSprintRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
}

type sprintServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewSprintServiceClient(cc grpc.ClientConnInterface) SprintServiceClient {
	return &sprintServiceClient{cc}
}

func (c *sprintServiceClient) GetSprint(ctx context.Context, in *GetSprintRequest, opts ...grpc.CallOption) (*GetSprintResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetSprintResponse)
	err := c.cc.Invoke(ctx, SprintService_GetSprint_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sprintServiceClient) ListSprints(ctx context.Context, in *ListSprintsRequest, opts ...grpc.CallOption) (*ListSprintsResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ListSprintsResponse)
	err := c.cc.Invoke(ctx, SprintService_ListSprints_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sprintServiceClient) CreateSprint(ctx context.Context, in *CreateSprintRequest, opts ...grpc.CallOption) (*CreateSprintResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(CreateSprintResponse)
	err := c.cc.Invoke(ctx, SprintService_CreateSprint_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sprintServiceClient) DeleteSprint(ctx context.Context, in *DeleteSprintRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, SprintService_DeleteSprint_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sprintServiceClient) GetActiveSprint(ctx context.Context, in *GetActiveSprintRequest, opts ...grpc.CallOption) (*GetActiveSprintResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetActiveSprintResponse)
	err := c.cc.Invoke(ctx, SprintService_GetActiveSprint_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sprintServiceClient) AddTaskToSprint(ctx context.Context, in *AddTaskToSprintRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, SprintService_AddTaskToSprint_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sprintServiceClient) RemoveTaskFromSprint(ctx context.Context, in *RemoveTaskToSprintRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, SprintService_RemoveTaskFromSprint_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sprintServiceClient) AddTeamMemberToSprint(ctx context.Context, in *AddTeamMemberToSprintRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, SprintService_AddTeamMemberToSprint_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sprintServiceClient) RemoveTeamMemberFromSprint(ctx context.Context, in *RemoveTeamMemberFromSprintRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, SprintService_RemoveTeamMemberFromSprint_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sprintServiceClient) MoveTasksToSprint(ctx context.Context, in *MoveTasksToSprintRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, SprintService_MoveTasksToSprint_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *sprintServiceClient) CopyTasksToSprint(ctx context.Context, in *CopyTasksToSprintRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, SprintService_CopyTasksToSprint_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// SprintServiceServer is the server API for SprintService service.
// All implementations must embed UnimplementedSprintServiceServer
// for forward compatibility
type SprintServiceServer interface {
	GetSprint(context.Context, *GetSprintRequest) (*GetSprintResponse, error)
	ListSprints(context.Context, *ListSprintsRequest) (*ListSprintsResponse, error)
	CreateSprint(context.Context, *CreateSprintRequest) (*CreateSprintResponse, error)
	DeleteSprint(context.Context, *DeleteSprintRequest) (*emptypb.Empty, error)
	GetActiveSprint(context.Context, *GetActiveSprintRequest) (*GetActiveSprintResponse, error)
	AddTaskToSprint(context.Context, *AddTaskToSprintRequest) (*emptypb.Empty, error)
	RemoveTaskFromSprint(context.Context, *RemoveTaskToSprintRequest) (*emptypb.Empty, error)
	AddTeamMemberToSprint(context.Context, *AddTeamMemberToSprintRequest) (*emptypb.Empty, error)
	RemoveTeamMemberFromSprint(context.Context, *RemoveTeamMemberFromSprintRequest) (*emptypb.Empty, error)
	MoveTasksToSprint(context.Context, *MoveTasksToSprintRequest) (*emptypb.Empty, error)
	CopyTasksToSprint(context.Context, *CopyTasksToSprintRequest) (*emptypb.Empty, error)
	mustEmbedUnimplementedSprintServiceServer()
}

// UnimplementedSprintServiceServer must be embedded to have forward compatible implementations.
type UnimplementedSprintServiceServer struct {
}

func (UnimplementedSprintServiceServer) GetSprint(context.Context, *GetSprintRequest) (*GetSprintResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSprint not implemented")
}
func (UnimplementedSprintServiceServer) ListSprints(context.Context, *ListSprintsRequest) (*ListSprintsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListSprints not implemented")
}
func (UnimplementedSprintServiceServer) CreateSprint(context.Context, *CreateSprintRequest) (*CreateSprintResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateSprint not implemented")
}
func (UnimplementedSprintServiceServer) DeleteSprint(context.Context, *DeleteSprintRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteSprint not implemented")
}
func (UnimplementedSprintServiceServer) GetActiveSprint(context.Context, *GetActiveSprintRequest) (*GetActiveSprintResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetActiveSprint not implemented")
}
func (UnimplementedSprintServiceServer) AddTaskToSprint(context.Context, *AddTaskToSprintRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddTaskToSprint not implemented")
}
func (UnimplementedSprintServiceServer) RemoveTaskFromSprint(context.Context, *RemoveTaskToSprintRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RemoveTaskFromSprint not implemented")
}
func (UnimplementedSprintServiceServer) AddTeamMemberToSprint(context.Context, *AddTeamMemberToSprintRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddTeamMemberToSprint not implemented")
}
func (UnimplementedSprintServiceServer) RemoveTeamMemberFromSprint(context.Context, *RemoveTeamMemberFromSprintRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RemoveTeamMemberFromSprint not implemented")
}
func (UnimplementedSprintServiceServer) MoveTasksToSprint(context.Context, *MoveTasksToSprintRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method MoveTasksToSprint not implemented")
}
func (UnimplementedSprintServiceServer) CopyTasksToSprint(context.Context, *CopyTasksToSprintRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CopyTasksToSprint not implemented")
}
func (UnimplementedSprintServiceServer) mustEmbedUnimplementedSprintServiceServer() {}

// UnsafeSprintServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to SprintServiceServer will
// result in compilation errors.
type UnsafeSprintServiceServer interface {
	mustEmbedUnimplementedSprintServiceServer()
}

func RegisterSprintServiceServer(s grpc.ServiceRegistrar, srv SprintServiceServer) {
	s.RegisterService(&SprintService_ServiceDesc, srv)
}

func _SprintService_GetSprint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetSprintRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SprintServiceServer).GetSprint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SprintService_GetSprint_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SprintServiceServer).GetSprint(ctx, req.(*GetSprintRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SprintService_ListSprints_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListSprintsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SprintServiceServer).ListSprints(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SprintService_ListSprints_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SprintServiceServer).ListSprints(ctx, req.(*ListSprintsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SprintService_CreateSprint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateSprintRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SprintServiceServer).CreateSprint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SprintService_CreateSprint_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SprintServiceServer).CreateSprint(ctx, req.(*CreateSprintRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SprintService_DeleteSprint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteSprintRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SprintServiceServer).DeleteSprint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SprintService_DeleteSprint_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SprintServiceServer).DeleteSprint(ctx, req.(*DeleteSprintRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SprintService_GetActiveSprint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetActiveSprintRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SprintServiceServer).GetActiveSprint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SprintService_GetActiveSprint_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SprintServiceServer).GetActiveSprint(ctx, req.(*GetActiveSprintRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SprintService_AddTaskToSprint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddTaskToSprintRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SprintServiceServer).AddTaskToSprint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SprintService_AddTaskToSprint_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SprintServiceServer).AddTaskToSprint(ctx, req.(*AddTaskToSprintRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SprintService_RemoveTaskFromSprint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RemoveTaskToSprintRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SprintServiceServer).RemoveTaskFromSprint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SprintService_RemoveTaskFromSprint_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SprintServiceServer).RemoveTaskFromSprint(ctx, req.(*RemoveTaskToSprintRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SprintService_AddTeamMemberToSprint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddTeamMemberToSprintRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SprintServiceServer).AddTeamMemberToSprint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SprintService_AddTeamMemberToSprint_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SprintServiceServer).AddTeamMemberToSprint(ctx, req.(*AddTeamMemberToSprintRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SprintService_RemoveTeamMemberFromSprint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RemoveTeamMemberFromSprintRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SprintServiceServer).RemoveTeamMemberFromSprint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SprintService_RemoveTeamMemberFromSprint_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SprintServiceServer).RemoveTeamMemberFromSprint(ctx, req.(*RemoveTeamMemberFromSprintRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SprintService_MoveTasksToSprint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MoveTasksToSprintRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SprintServiceServer).MoveTasksToSprint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SprintService_MoveTasksToSprint_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SprintServiceServer).MoveTasksToSprint(ctx, req.(*MoveTasksToSprintRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SprintService_CopyTasksToSprint_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CopyTasksToSprintRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SprintServiceServer).CopyTasksToSprint(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: SprintService_CopyTasksToSprint_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SprintServiceServer).CopyTasksToSprint(ctx, req.(*CopyTasksToSprintRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// SprintService_ServiceDesc is the grpc.ServiceDesc for SprintService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var SprintService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "SprintService",
	HandlerType: (*SprintServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetSprint",
			Handler:    _SprintService_GetSprint_Handler,
		},
		{
			MethodName: "ListSprints",
			Handler:    _SprintService_ListSprints_Handler,
		},
		{
			MethodName: "CreateSprint",
			Handler:    _SprintService_CreateSprint_Handler,
		},
		{
			MethodName: "DeleteSprint",
			Handler:    _SprintService_DeleteSprint_Handler,
		},
		{
			MethodName: "GetActiveSprint",
			Handler:    _SprintService_GetActiveSprint_Handler,
		},
		{
			MethodName: "AddTaskToSprint",
			Handler:    _SprintService_AddTaskToSprint_Handler,
		},
		{
			MethodName: "RemoveTaskFromSprint",
			Handler:    _SprintService_RemoveTaskFromSprint_Handler,
		},
		{
			MethodName: "AddTeamMemberToSprint",
			Handler:    _SprintService_AddTeamMemberToSprint_Handler,
		},
		{
			MethodName: "RemoveTeamMemberFromSprint",
			Handler:    _SprintService_RemoveTeamMemberFromSprint_Handler,
		},
		{
			MethodName: "MoveTasksToSprint",
			Handler:    _SprintService_MoveTasksToSprint_Handler,
		},
		{
			MethodName: "CopyTasksToSprint",
			Handler:    _SprintService_CopyTasksToSprint_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "teamy/sprint_service.proto",
}
