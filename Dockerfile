FROM golang:1.16

ARG USER_ID


RUN apt update && apt list --upgradable
RUN apt install -y protobuf-compiler
RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.26
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1

RUN mkdir -p src/github.com/envoyproxy \
        && cd src/github.com/envoyproxy \
        && git clone https://github.com/envoyproxy/protoc-gen-validate.git \
        && cd protoc-gen-validate \
        && make build
RUN wget -O /usr/local/bin/protoc-gen-grpc-web https://github.com/grpc/grpc-web/releases/download/1.2.1/protoc-gen-grpc-web-1.2.1-linux-x86_64 
RUN chmod 755 /usr/local/bin/protoc-gen-grpc-web

WORKDIR /app
COPY --chown=$USER_ID entrypoint.sh .
RUN chmod 755 entrypoint.sh

USER $USER_ID

ENTRYPOINT ["./entrypoint.sh"]
