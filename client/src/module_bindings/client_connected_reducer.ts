// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN YOUR MODULE SOURCE CODE INSTEAD.

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import {
  AlgebraicType,
  AlgebraicValue,
  BinaryReader,
  BinaryWriter,
  //CallReducerFlags, (module does not provide export error)
  ConnectionId,
  DbConnectionBuilder,
  DbConnectionImpl,
  //DbContext, (module does not provide export error)
  //ErrorContextInterface, (module does not provide export error)
  //Event, (module does not provide export error)
  //EventContextInterface, (module does not provide export error)
  Identity,
  ProductType,
  ProductTypeElement,
  //ReducerEventContextInterface, (module does not provide export error)
  SubscriptionBuilderImpl,
  //SubscriptionEventContextInterface, (module does not provide export error)
  SumType,
  SumTypeVariant,
  TableCache,
  TimeDuration,
  Timestamp,
  deepEqual,
} from "@clockworklabs/spacetimedb-sdk";

export type ClientConnected = {};

/**
 * A namespace for generated helper functions.
 */
export namespace ClientConnected {
  /**
  * A function which returns this type represented as an AlgebraicType.
  * This function is derived from the AlgebraicType used to generate this type.
  */
  export function getTypeScriptAlgebraicType(): AlgebraicType {
    return AlgebraicType.createProductType([
    ]);
  }

  export function serialize(writer: BinaryWriter, value: ClientConnected): void {
    ClientConnected.getTypeScriptAlgebraicType().serialize(writer, value);
  }

  export function deserialize(reader: BinaryReader): ClientConnected {
    return ClientConnected.getTypeScriptAlgebraicType().deserialize(reader);
  }

}

