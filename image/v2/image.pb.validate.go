// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: image/v2/image.proto

package image

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"strings"
	"time"
	"unicode/utf8"

	"google.golang.org/protobuf/types/known/anypb"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = anypb.Any{}
)

// Validate checks the field values on Size with the rules defined in the proto
// definition for this message. If any rules are violated, the first error
// encountered is returned, or nil if there are no violations.
func (m *Size) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Size with the rules defined in the
// proto definition for this message. If any rules are violated, the result is
// a list of violation errors wrapped in SizeMultiError, or nil if none found.
func (m *Size) ValidateAll() error {
	return m.validate(true)
}

func (m *Size) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Original

	// no validation rules for Small

	// no validation rules for Medium

	// no validation rules for Large

	if len(errors) > 0 {
		return SizeMultiError(errors)
	}
	return nil
}

// SizeMultiError is an error wrapping multiple validation errors returned by
// Size.ValidateAll() if the designated constraints aren't met.
type SizeMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m SizeMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m SizeMultiError) AllErrors() []error { return m }

// SizeValidationError is the validation error returned by Size.Validate if the
// designated constraints aren't met.
type SizeValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e SizeValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e SizeValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e SizeValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e SizeValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e SizeValidationError) ErrorName() string { return "SizeValidationError" }

// Error satisfies the builtin error interface
func (e SizeValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sSize.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = SizeValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = SizeValidationError{}

// Validate checks the field values on Points with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Points) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Points with the rules defined in the
// proto definition for this message. If any rules are violated, the result is
// a list of violation errors wrapped in PointsMultiError, or nil if none found.
func (m *Points) ValidateAll() error {
	return m.validate(true)
}

func (m *Points) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for X1

	// no validation rules for Y1

	// no validation rules for X2

	// no validation rules for Y2

	if len(errors) > 0 {
		return PointsMultiError(errors)
	}
	return nil
}

// PointsMultiError is an error wrapping multiple validation errors returned by
// Points.ValidateAll() if the designated constraints aren't met.
type PointsMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m PointsMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m PointsMultiError) AllErrors() []error { return m }

// PointsValidationError is the validation error returned by Points.Validate if
// the designated constraints aren't met.
type PointsValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e PointsValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e PointsValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e PointsValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e PointsValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e PointsValidationError) ErrorName() string { return "PointsValidationError" }

// Error satisfies the builtin error interface
func (e PointsValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sPoints.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = PointsValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = PointsValidationError{}

// Validate checks the field values on Image with the rules defined in the
// proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Image) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Image with the rules defined in the
// proto definition for this message. If any rules are violated, the result is
// a list of violation errors wrapped in ImageMultiError, or nil if none found.
func (m *Image) ValidateAll() error {
	return m.validate(true)
}

func (m *Image) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	// no validation rules for Name

	if all {
		switch v := interface{}(m.GetSize()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, ImageValidationError{
					field:  "Size",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, ImageValidationError{
					field:  "Size",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetSize()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return ImageValidationError{
				field:  "Size",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if all {
		switch v := interface{}(m.GetPoints()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, ImageValidationError{
					field:  "Points",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, ImageValidationError{
					field:  "Points",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetPoints()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return ImageValidationError{
				field:  "Points",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return ImageMultiError(errors)
	}
	return nil
}

// ImageMultiError is an error wrapping multiple validation errors returned by
// Image.ValidateAll() if the designated constraints aren't met.
type ImageMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m ImageMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m ImageMultiError) AllErrors() []error { return m }

// ImageValidationError is the validation error returned by Image.Validate if
// the designated constraints aren't met.
type ImageValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ImageValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ImageValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ImageValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ImageValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ImageValidationError) ErrorName() string { return "ImageValidationError" }

// Error satisfies the builtin error interface
func (e ImageValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sImage.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ImageValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ImageValidationError{}
