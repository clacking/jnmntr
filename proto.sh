#!/bin/bash

SRC=./proto
OUT=./runner/proto

export PATH="$PATH:$(yarn bin)"

mkdir -p ${OUT}

# generate js codes via grpc-tools
npx grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:${OUT} \
--grpc_out=${OUT} \
--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
-I ${SRC} \
./${SRC}/*.proto

# generate d.ts codes
protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=${OUT} \
-I ${SRC} \
./${SRC}/*.proto
